/* ==========================================================
   LAYERS SHIFT — Downloads section
   scripts/downloads.js

   - Builds the whole #download section from releases.json
     (which the "Update releases.json" GitHub Action keeps
     up to date automatically on every new Release).
   - Highlights the build that matches the visitor's OS.
   - Has its own EN / AR strings and re-renders when the page
     language changes (watches <html lang> / <html dir>), so it
     does not depend on i18n.js.
   - Falls back to the GitHub "latest" links if releases.json
     can't be loaded.
   ========================================================== */
(function () {
  "use strict";

  var RELEASES_URL = "./releases.json";
  var LATEST_BASE = "https://github.com/AbdullahAlkzaz/layers-shift/releases/latest/download/";
  var WA_BASE = "https://wa.me/201275107815?text=";

  var FALLBACK = {
    channel: "stable",
    windows: { url: LATEST_BASE + "Layers.Shift-windows.exe" },
    macos: { url: LATEST_BASE + "Layers.Shift-mac.dmg" }
  };

  var STRINGS = {
    en: {
      nav: "Download",
      eyebrow: "Download",
      title: "Download Layers Shift",
      text: "Get the latest official build for Windows or macOS. Install it, then activate with your license key.",
      recommended: "Recommended for your device",
      latest: "Latest Stable",
      version: "Version",
      released: "Released",
      size: "File size",
      requirement: "Requirements",
      arch: "Architecture",
      sha: "SHA-256",
      copy: "Copy",
      copied: "Copied",
      dlWin: "Download for Windows",
      dlMac: "Download for macOS",
      notes: "Release notes",
      noNotes: "No release notes for this version.",
      verify: "To verify your download, compare its SHA-256 checksum with the value shown on the card.",
      licTitle: "Need a license key?",
      licText: "Purchase through WhatsApp and receive your key and activation steps after payment.",
      licBtn: "Buy via WhatsApp",
      waMsg: "Hello Layers Shift, I want to buy a license. Please send me payment and activation details.",
      fallback: "Version details are unavailable right now. The button still downloads the latest release."
    },
    ar: {
      nav: "التحميل",
      eyebrow: "التحميل",
      title: "حمّل Layers Shift",
      text: "احصل على أحدث نسخة رسمية لنظام Windows أو macOS، ثبّتها ثم فعّلها بمفتاح الترخيص الخاص بك.",
      recommended: "الأنسب لجهازك",
      latest: "أحدث إصدار مستقر",
      version: "الإصدار",
      released: "تاريخ الإصدار",
      size: "حجم الملف",
      requirement: "متطلبات التشغيل",
      arch: "المعمارية",
      sha: "SHA-256",
      copy: "نسخ",
      copied: "تم النسخ",
      dlWin: "تحميل لنظام Windows",
      dlMac: "تحميل لنظام macOS",
      notes: "ملاحظات الإصدار",
      noNotes: "لا توجد ملاحظات لهذا الإصدار.",
      verify: "للتأكد من سلامة الملف، قارن قيمة SHA-256 الخاصة به بالقيمة المعروضة في البطاقة.",
      licTitle: "تحتاج مفتاح ترخيص؟",
      licText: "اشترِ عبر واتساب واستلم المفتاح وخطوات التفعيل بعد الدفع.",
      licBtn: "اشترِ عبر واتساب",
      waMsg: "مرحباً Layers Shift، أريد شراء ترخيص. من فضلكم أرسلوا لي تفاصيل الدفع والتفعيل.",
      fallback: "تفاصيل الإصدار غير متاحة حالياً. الزر ما زال يحمّل أحدث إصدار."
    }
  };

  var ICONS = {
    windows:
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M3 5.1 10.4 4v7.4H3z"/><path d="M11.3 3.9 21 2.5v8.8h-9.7z"/><path d="M3 12.3h7.4v7.4L3 18.6z"/><path d="M11.3 12.3H21v9.1l-9.7-1.4z"/></svg>',
    macos:
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">' +
      '<path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.017-.086-.05-.335-.05-.585 0-1.14.572-2.27 1.206-2.98.744-.85 2.03-1.48 3.056-1.53.017.15.036.312.036.475zm4.573 15.615c-.24.522-.354.756-.658 1.22-.42.634-1.014 1.42-1.75 1.43-.66.008-.83-.43-1.72-.42-.89.008-1.075.43-1.735.42-.735-.01-1.29-.716-1.71-1.35-1.16-1.75-2.03-4.95-.85-7.11.585-1.08 1.63-1.762 2.77-1.78.7-.01 1.36.47 1.79.47.43 0 1.23-.58 2.08-.5.354.015 1.35.143 1.99 1.08-.052.032-1.19.694-1.18 2.07.01 1.64 1.44 2.19 1.46 2.2-.01.05-.23.79-.75 1.56z"/></svg>'
  };

  var state = { data: FALLBACK, usedFallback: true, os: detectOS() };

  /* ---------- helpers ---------- */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function currentLang() {
    var root = document.documentElement;
    var l = (root.lang || "en").toLowerCase();
    return l.indexOf("ar") === 0 || root.dir === "rtl" ? "ar" : "en";
  }

  function detectOS() {
    var ua = navigator.userAgent || "";
    var platform =
      (navigator.userAgentData && navigator.userAgentData.platform) ||
      navigator.platform ||
      "";
    if (/android|iphone|ipad|ipod/i.test(ua)) return "other";
    if (/mac/i.test(platform) || /Macintosh/i.test(ua)) return "macos";
    if (/win/i.test(platform) || /Windows/i.test(ua)) return "windows";
    return "other";
  }

  function fmtDate(str, lang) {
    if (!str) return "";
    var d = new Date(str + "T00:00:00Z");
    if (isNaN(d.getTime())) return str;
    try {
      return new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : "en-US", {
        dateStyle: "medium",
        timeZone: "UTC"
      }).format(d);
    } catch (e) {
      return str;
    }
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return Promise.reject(new Error("clipboard unavailable"));
  }

  /* ---------- data ---------- */

  function load() {
    return fetch(RELEASES_URL, { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("releases.json " + res.status);
        return res.json();
      })
      .then(function (data) {
        if (!data || !data.windows || !data.macos) throw new Error("bad releases.json");
        state.data = data;
        state.usedFallback = false;
      })
      .catch(function (err) {
        console.warn("[LayersShift] Using fallback download links:", err);
      });
  }

  /* ---------- rendering ---------- */

  function specRow(label, value) {
    var row = el("div", "flex items-baseline justify-between gap-4 border-t border-white/10 py-2.5 text-sm");
    row.appendChild(el("dt", "text-muted", label));
    var dd = el("dd", "text-end text-slate-200", value);
    dd.setAttribute("dir", "auto");
    row.appendChild(dd);
    return row;
  }

  function buildCard(key, rel, s, lang, isRecommended, isPrimary) {
    var card = el(
      "article",
      "relative flex flex-col gap-5 rounded-panel p-8 transition-all duration-300 hover:-translate-y-1 " +
        (isRecommended
          ? "order-first border-2 border-cyan/50 bg-gradient-to-b from-white/[.06] to-white/[.03] shadow-elevated md:order-none"
          : "border border-white/10 bg-white/[.04] shadow-soft hover:border-white/20")
    );
    card.setAttribute("data-os", key);

    if (isRecommended) {
      card.appendChild(
        el("span", "w-fit rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 text-xs font-bold text-cyan", s.recommended)
      );
    }

    // header: icon + name
    var head = el("div", "flex items-center gap-4");
    var icon = el("span", "grid h-11 w-11 shrink-0 place-items-center rounded-chip border border-white/10 bg-white/[.06] text-white");
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = ICONS[key]; // static, trusted markup
    head.appendChild(icon);
    head.appendChild(el("h3", "text-2xl font-black", key === "windows" ? "Windows" : "macOS"));
    card.appendChild(head);

    // tags
    var tags = el("div", "flex flex-wrap gap-2");
    if (rel.version) {
      tags.appendChild(el("span", "rounded-full border border-white/10 bg-white/[.05] px-3 py-1 font-mono text-xs text-slate-300", "v" + rel.version));
    }
    if (!state.usedFallback && state.data.channel === "stable" && rel.version && rel.version === state.data.latest) {
      tags.appendChild(el("span", "rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-bold text-success", s.latest));
    }
    if (tags.childNodes.length) card.appendChild(tags);

    // specs
    var specs = el("dl", "grid");
    if (rel.version) specs.appendChild(specRow(s.version, rel.version));
    if (rel.releaseDate) specs.appendChild(specRow(s.released, fmtDate(rel.releaseDate, lang)));
    if (rel.size) specs.appendChild(specRow(s.size, rel.size));
    if (rel.requirement) specs.appendChild(specRow(s.requirement, rel.requirement));
    if (rel.arch) specs.appendChild(specRow(s.arch, rel.arch));
    if (specs.childNodes.length) {
      specs.appendChild(el("div", "border-t border-white/10"));
      card.appendChild(specs);
    }

    // sha256
    if (rel.sha256) {
      var box = el("div", "rounded-chip border border-white/10 bg-black/20 p-3");
      var top = el("div", "mb-2 flex items-center justify-between gap-3");
      top.appendChild(el("span", "text-xs font-bold uppercase tracking-wide text-muted", s.sha));
      var copyBtn = el("button", "rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-200 transition-colors hover:bg-white/[.08]", s.copy);
      copyBtn.type = "button";
      copyBtn.addEventListener("click", function () {
        copyText(rel.sha256).then(function () {
          copyBtn.textContent = s.copied;
          setTimeout(function () { copyBtn.textContent = s.copy; }, 1500);
        }).catch(function () {});
      });
      top.appendChild(copyBtn);
      box.appendChild(top);
      var code = el("code", "block break-all font-mono text-[11px] leading-5 text-slate-300", rel.sha256);
      code.setAttribute("dir", "ltr");
      box.appendChild(code);
      card.appendChild(box);
    }

    // download button
    var btn = el(
      "a",
      "button mt-auto inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 " +
        (isPrimary
          ? "bg-gradient-to-r from-primary to-secondary shadow-glow"
          : "border border-white/15 bg-white/[.04] hover:border-white/30 hover:bg-white/[.08]"),
      key === "windows" ? s.dlWin : s.dlMac
    );
    btn.href = rel.url || "#";
    btn.setAttribute("download", "");
    btn.setAttribute("rel", "noopener");
    card.appendChild(btn);

    // release notes
    if (!state.usedFallback) {
      var details = el("details", "group border-t border-white/10 pt-4");
      details.appendChild(el("summary", "cursor-pointer list-none text-sm font-bold text-slate-200 marker:content-none", s.notes));
      var list = el("ul", "mt-3 grid gap-2");
      var notes = Array.isArray(rel.releaseNotes) ? rel.releaseNotes.filter(Boolean) : [];
      if (notes.length) {
        notes.forEach(function (n) {
          list.appendChild(
            el("li", "flex items-start gap-2 text-sm leading-6 text-slate-300 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan before:content-['']", n)
          );
        });
      } else {
        list.appendChild(el("li", "text-sm text-muted", s.noNotes));
      }
      details.appendChild(list);
      card.appendChild(details);
    }

    return card;
  }

  function buildSection(s, lang) {
    var wrap = document.createDocumentFragment();

    var head = el("div", "mx-auto mb-12 grid max-w-[720px] gap-4 text-center");
    head.appendChild(el("p", "text-xs font-bold uppercase tracking-[0.14em] text-cyan", s.eyebrow));
    head.appendChild(el("h2", "text-[clamp(1.9rem,3.6vw,3.2rem)] font-black leading-tight", s.title));
    head.appendChild(el("p", "text-slate-300", s.text));
    wrap.appendChild(head);

    var hasRec = state.os === "windows" || state.os === "macos";
    var grid = el("div", "mx-auto grid max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2");
    ["windows", "macos"].forEach(function (key) {
      var rel = state.data[key] || FALLBACK[key];
      var isRec = hasRec && state.os === key;
      grid.appendChild(buildCard(key, rel, s, lang, isRec, !hasRec || isRec));
    });
    wrap.appendChild(grid);

    if (state.usedFallback) {
      wrap.appendChild(el("p", "mx-auto mt-6 max-w-[900px] text-center text-sm text-muted", s.fallback));
    } else {
      wrap.appendChild(el("p", "mx-auto mt-6 max-w-[900px] text-center text-xs text-muted", s.verify));
    }

    // license panel
    var lic = el("div", "mx-auto mt-10 flex max-w-[900px] flex-col items-start justify-between gap-4 rounded-panel border border-white/10 bg-white/[.04] p-6 shadow-soft sm:flex-row sm:items-center");
    var licText = el("div", "grid gap-1");
    licText.appendChild(el("strong", "text-white", s.licTitle));
    licText.appendChild(el("span", "text-sm text-muted", s.licText));
    lic.appendChild(licText);
    var wa = el("a", "button inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[.04] px-5 text-sm font-bold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/[.08]", s.licBtn);
    wa.href = WA_BASE + encodeURIComponent(s.waMsg);
    wa.target = "_blank";
    wa.rel = "noreferrer";
    lic.appendChild(wa);
    wrap.appendChild(lic);

    return wrap;
  }

  function updateNav(s) {
    var links = document.querySelectorAll("[data-dl-nav]");
    for (var i = 0; i < links.length; i++) links[i].textContent = s.nav;
  }

  function render() {
    var root = document.getElementById("download");
    var lang = currentLang();
    var s = STRINGS[lang];
    updateNav(s);
    if (!root) return;
    root.textContent = "";
    root.appendChild(buildSection(s, lang));
  }

  /* ---------- boot ---------- */

  updateNav(STRINGS[currentLang()]);

  load().then(render);

  // Re-render when the page language changes (i18n.js sets lang/dir on <html>)
  new MutationObserver(render).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang", "dir"]
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-language-option]")) {
      setTimeout(render, 80);
    }
  });
})();
