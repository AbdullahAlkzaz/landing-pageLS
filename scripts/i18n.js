// Language switcher and WhatsApp CTA routing
const whatsappNumber = "201275107815";
const languageStorageKey = "layersShiftLanguage";

const whatsappMessages = {
  en: {
    general: "Hello Layers Shift, I want to ask about the software.",
    support: "Hello Layers Shift, I need support. Please help me.",
    single: "Hello Layers Shift, I want to buy the Single Device license for 990 EGP. Please send me payment and activation details.",
    studio: "Hello Layers Shift, I want to buy the Studio license for 2490 EGP. Please send me payment and activation details.",
    team: "Hello Layers Shift, I want the Team license for 3990 EGP. Please send me the details."
  },
  ar: {
    general: "مرحبًا Layers Shift، أريد الاستفسار عن البرنامج.",
    support: "مرحبًا Layers Shift، أحتاج إلى دعم فني. من فضلك ساعدني.",
    single: "مرحبًا Layers Shift، أريد شراء ترخيص Single Device بسعر 990 جنيه. من فضلك أرسل تفاصيل الدفع والتفعيل.",
    studio: "مرحبًا Layers Shift، أريد شراء ترخيص Studio بسعر 2490 جنيه. من فضلك أرسل تفاصيل الدفع والتفعيل.",
    team: "مرحبًا Layers Shift، أريد تفاصيل ترخيص Team بسعر 3990 جنيه."
  }
};

const translations = {
  en: {
    metaTitle: "Layers Shift | Professional Variable Data Printing Software",
    metaDescription: "Layers Shift is a professional desktop application that turns Excel data into thousands of print-ready certificates, IDs, badges, labels, and production files in minutes.",
    dictionary: {
      "nav.features": "Features",
      "nav.workflow": "Workflow",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "cta.whatsapp": "Talk on WhatsApp",
      "cta.buy": "Buy Now",
      "cta.lifetime": "Get Lifetime License",
      "hero.eyebrow": "Desktop software for high-volume print automation",
      "hero.title": "From Excel to production-ready print files in minutes.",
      "hero.subtitle": "Layers Shift helps designers, studios, schools, agencies, and production teams generate thousands of certificates, ID cards, badges, labels, and packaging variations without repetitive manual editing.",
      "hero.queue": "PDF files queued",
      "hero.preview": "Live preview",
      "hero.bilingual": "Arabic and English data",
      "purchase.title": "Purchase via WhatsApp",
      "purchase.note": "License key, download link, guide, and activation steps delivered after payment.",
      "video.eyebrow": "Hero video",
      "video.title": "Watch a production job move without the usual friction.",
      "video.text": "A focused demo frame for import, mapping, preview, batch generation, and PDF export.",
      "trusted.title": "Trusted for production work by",
      "trusted.print": "Print Shops",
      "trusted.schools": "Schools",
      "trusted.universities": "Universities",
      "trusted.studios": "Studios",
      "trusted.government": "Government Offices",
      "trusted.agencies": "Agencies",
      "stats.designs": "Designs generated",
      "stats.hours": "Hours saved",
      "stats.customers": "Customers",
      "stats.countries": "Countries",
      "stats.projects": "Projects completed",
      "pain.eyebrow": "The manual workflow",
      "pain.title": "One name change becomes a whole afternoon.",
      "pain.text": "Designers lose focus to copy-paste loops, repeated exports, file naming mistakes, missing photos, wrong IDs, and version chaos when production volume rises.",
      "pain.item1": "Hundreds of manual edits across certificates, cards, labels, and tags.",
      "pain.item2": "Human errors discovered only after proofing or printing.",
      "pain.item3": "Senior designers trapped in repetitive production work.",
      "solution.eyebrow": "The Layers Shift workflow",
      "solution.title": "Bind the data once. Generate the whole run.",
      "solution.text": "Import Excel, connect columns to layers, preview any row, and export clean print-ready files with naming, resolution, and output settings under control.",
      "solution.item1": "Smart data binding for names, photos, IDs, codes, and text blocks.",
      "solution.item2": "Batch processing for thousands of variations.",
      "solution.item3": "Desktop reliability for Windows and macOS teams.",
      "workflow.eyebrow": "Workflow timeline",
      "workflow.title": "The print run finally has a straight line.",
      "workflow.text": "Every step is visible, reversible, and built for production speed.",
      "workflow.step1.title": "Excel",
      "workflow.step1.text": "Start with customer, student, employee, event, or product data.",
      "workflow.step2.title": "Import",
      "workflow.step2.text": "Load structured rows and media paths into a desktop project.",
      "workflow.step3.title": "Map Layers",
      "workflow.step3.text": "Connect columns to design layers with clear binding controls.",
      "workflow.step4.title": "Preview",
      "workflow.step4.text": "Inspect any record before production begins.",
      "workflow.step5.title": "Generate",
      "workflow.step5.text": "Create thousands of precise design variations.",
      "workflow.step6.title": "Export",
      "workflow.step6.text": "Deliver high-resolution PDF files ready for print.",
      "features.eyebrow": "Interactive features",
      "features.title": "Built for designers who ship real production jobs.",
      "features.text": "Not a script, not a plugin, not a subscription. A focused desktop application for variable print work.",
      "features.excel.title": "Excel Import",
      "features.excel.text": "Bring production data into a clean project workspace with predictable structure.",
      "features.binding.title": "Smart Data Binding",
      "features.binding.text": "Map names, numbers, photos, QR-style codes, and long text to the right layer.",
      "features.preview.title": "Live Preview",
      "features.preview.text": "Move through records instantly before committing a batch export.",
      "features.pdf.title": "PDF Export",
      "features.pdf.text": "Output print-ready files with high-resolution settings for professional finishing.",
      "features.language.title": "Arabic and English",
      "features.language.text": "Handle bilingual production work with dark and light interface modes.",
      "features.platform.title": "Windows and macOS",
      "features.platform.text": "Give mixed production teams the same reliable desktop workflow.",
      "bento.title": "Template library, freeform composer, project save/open.",
      "bento.text": "Keep repeat jobs organized, reopen client work, and compose print layouts without rebuilding the same production setup every time.",
      "bento.dark.title": "Dark Mode",
      "bento.dark.text": "For long studio sessions.",
      "bento.light.title": "Light Mode",
      "bento.light.text": "For proofing and office review.",
      "screens.eyebrow": "Software screenshots",
      "screens.title": "A serious desktop workspace for serious production volume.",
      "compare.eyebrow": "Before vs after",
      "compare.title": "The difference is not small. It is the production model.",
      "compare.manual.label": "Manual Workflow",
      "compare.manual.title": "Open, edit, export, rename, repeat.",
      "compare.manual.text": "Slow jobs, tired eyes, inconsistent files, and errors that become expensive at print time.",
      "compare.shift.label": "Layers Shift",
      "compare.shift.title": "Import, map, preview, generate, print.",
      "compare.shift.text": "One controlled workflow that keeps designers focused on quality and production teams moving.",
      "value.eyebrow": "Production value",
      "value.title": "One Large Project Can Pay for Layers Shift",
      "value.manual.label": "Manual Editing",
      "value.manual.time": "8+ Hours",
      "value.manual.item1": "Hundreds of repetitive edits",
      "value.manual.item2": "Higher chance of mistakes",
      "value.shift.label": "Layers Shift",
      "value.shift.time": "Minutes",
      "value.shift.item1": "Excel Automation",
      "value.shift.item2": "Consistent Results",
      "value.shift.item3": "Ready for Printing",
      "pricing.eyebrow": "Pricing",
      "pricing.title": "Choose the license that fits your production floor.",
      "pricing.text": "Customers purchase through WhatsApp. After payment, you receive a license key, download link, installation guide, and activation instructions.",
      "pricing.single.label": "Single Device",
      "pricing.single.price": "990 EGP",
      "pricing.single.text": "Perfect for freelancers and individual designers.",
      "pricing.studio.label": "Studio",
      "pricing.studio.badge": "Most Popular",
      "pricing.studio.price": "2490 EGP",
      "pricing.studio.text": "Built for professional print studios and agencies.",
      "pricing.team.label": "Team",
      "pricing.team.price": "3990 EGP",
      "pricing.team.text": "Designed for organizations with collaborative production.",
      "pricing.educational.label": "Educational",
      "pricing.educational.title": "Schools and universities",
      "pricing.educational.text": "For certificate, ID, student card, and event production teams.",
      "pricing.lifetime.label": "Lifetime License",
      "pricing.lifetime.title": "Professional studios",
      "pricing.lifetime.text": "No subscription. Built for designers, agencies, and print shops that run recurring batch jobs.",
      "pricing.enterprise.label": "Enterprise",
      "pricing.enterprise.title": "Large production teams",
      "pricing.enterprise.text": "For government offices, corporate HR, and multi-seat print operations.",
      "pricing.contact": "Contact Sales",
      "pricing.buy": "Buy Now",
      "pricing.choose": "Choose Your Plan",
      "faq.eyebrow": "FAQ",
      "faq.title": "Clear answers before you buy.",
      "faq.q1": "Is Layers Shift a Photoshop script or plugin?",
      "faq.a1": "No. Layers Shift is a professional desktop application for high-volume variable data print automation.",
      "faq.q2": "How do customers purchase?",
      "faq.a2": "Purchases are handled through WhatsApp. After payment, you receive the license key, download link, installation guide, and activation instructions.",
      "faq.q3": "Does it support Arabic and English?",
      "faq.a3": "Yes. Layers Shift is designed for bilingual production workflows, including Arabic and English projects.",
      "faq.q4": "Can it export print-ready PDF files?",
      "faq.a4": "Yes. The export workflow is built for high-resolution print-ready output.",
      "faq.q5": "Is it subscription software?",
      "faq.a5": "No. Layers Shift is positioned around lifetime licensing, with update terms clarified during purchase.",
      "final.title": "Ready to automate your production?",
      "final.text": "Stop spending skilled design hours on repeated edits. Move your next Excel list through Layers Shift and deliver the whole print run with confidence.",
      "footer.company": "Company",
      "footer.social": "Social",
      "footer.whatsapp": "WhatsApp",
      "footer.docs": "Documentation",
      "footer.privacy": "Privacy",
      "footer.license": "License",
      "footer.copy": "© 2026 Layers Shift. Professional Variable Data Printing Software."
    }
  },
  ar: {
    metaTitle: "Layers Shift | برنامج احترافي للطباعة بالبيانات المتغيرة",
    metaDescription: "Layers Shift هو تطبيق سطح مكتب احترافي يحول بيانات Excel إلى آلاف الشهادات والهويات والبادجات والملصقات وملفات الطباعة الجاهزة خلال دقائق.",
    dictionary: {
      "nav.features": "المميزات",
      "nav.workflow": "طريقة العمل",
      "nav.pricing": "الأسعار",
      "nav.faq": "الأسئلة",
      "nav.contact": "تواصل",
      "cta.whatsapp": "تواصل واتساب",
      "cta.buy": "اشتر الآن",
      "cta.lifetime": "احصل على ترخيص مدى الحياة",
      "hero.eyebrow": "برنامج سطح مكتب لأتمتة الطباعة بكميات كبيرة",
      "hero.title": "من ملف Excel إلى ملفات طباعة جاهزة خلال دقائق.",
      "hero.subtitle": "يساعد Layers Shift المصممين والمطابع والمدارس والوكالات وفرق الإنتاج على إنشاء آلاف الشهادات وبطاقات الهوية والبادجات والملصقات وتغييرات التغليف بدون تعديل يدوي متكرر.",
      "hero.queue": "ملفات PDF في قائمة الإنتاج",
      "hero.preview": "معاينة مباشرة",
      "hero.bilingual": "بيانات عربية وإنجليزية",
      "purchase.title": "الشراء عبر واتساب",
      "purchase.note": "بعد الدفع تحصل على مفتاح الترخيص ورابط البرنامج ودليل التثبيت وخطوات التفعيل.",
      "video.eyebrow": "فيديو توضيحي",
      "video.title": "شاهد مهمة إنتاج تتحرك بدون التعقيد المعتاد.",
      "video.text": "إطار عرض مركز لخطوات الاستيراد والربط والمعاينة والتوليد الجماعي وتصدير PDF.",
      "trusted.title": "موثوق في أعمال الإنتاج لدى",
      "trusted.print": "المطابع",
      "trusted.schools": "المدارس",
      "trusted.universities": "الجامعات",
      "trusted.studios": "استوديوهات التصميم",
      "trusted.government": "الجهات الحكومية",
      "trusted.agencies": "الوكالات",
      "stats.designs": "تصميم تم توليده",
      "stats.hours": "ساعة تم توفيرها",
      "stats.customers": "عميل",
      "stats.countries": "دولة",
      "stats.projects": "مشروع مكتمل",
      "pain.eyebrow": "الطريقة اليدوية",
      "pain.title": "تغيير اسم واحد قد يستهلك اليوم كله.",
      "pain.text": "يفقد المصممون تركيزهم داخل دوائر النسخ واللصق والتصدير المتكرر وأخطاء تسمية الملفات والصور الناقصة والأرقام الخاطئة وفوضى الإصدارات عند زيادة حجم الإنتاج.",
      "pain.item1": "مئات التعديلات اليدوية على الشهادات والكروت والملصقات والتاجات.",
      "pain.item2": "أخطاء بشرية تظهر بعد المراجعة أو بعد الطباعة.",
      "pain.item3": "مصممون محترفون عالقون في مهام إنتاج متكررة.",
      "solution.eyebrow": "طريقة Layers Shift",
      "solution.title": "اربط البيانات مرة واحدة. وولّد الإنتاج بالكامل.",
      "solution.text": "استورد Excel، اربط الأعمدة بالطبقات، عاين أي صف، وصدّر ملفات جاهزة للطباعة مع تحكم في التسمية والدقة وإعدادات الإخراج.",
      "solution.item1": "ربط ذكي للأسماء والصور والأرقام والأكواد والنصوص الطويلة.",
      "solution.item2": "معالجة جماعية لآلاف النسخ المختلفة.",
      "solution.item3": "اعتمادية سطح مكتب لفرق Windows وmacOS.",
      "workflow.eyebrow": "خطوات العمل",
      "workflow.title": "مسار الطباعة أصبح واضحًا من البداية للنهاية.",
      "workflow.text": "كل خطوة مرئية وقابلة للمراجعة ومصممة لسرعة الإنتاج.",
      "workflow.step1.title": "Excel",
      "workflow.step1.text": "ابدأ ببيانات العملاء أو الطلاب أو الموظفين أو الفعاليات أو المنتجات.",
      "workflow.step2.title": "استيراد",
      "workflow.step2.text": "حمّل الصفوف ومسارات الصور داخل مشروع سطح مكتب منظم.",
      "workflow.step3.title": "ربط الطبقات",
      "workflow.step3.text": "اربط الأعمدة بطبقات التصميم من خلال تحكم واضح.",
      "workflow.step4.title": "معاينة",
      "workflow.step4.text": "راجع أي سجل قبل بدء الإنتاج.",
      "workflow.step5.title": "توليد",
      "workflow.step5.text": "أنشئ آلاف النسخ الدقيقة من التصميم.",
      "workflow.step6.title": "تصدير",
      "workflow.step6.text": "سلّم ملفات PDF عالية الدقة جاهزة للطباعة.",
      "features.eyebrow": "مميزات تفاعلية",
      "features.title": "مصمم لمن يسلّمون أعمال إنتاج حقيقية.",
      "features.text": "ليس سكربتًا، وليس إضافة، وليس اشتراكًا. إنه تطبيق سطح مكتب متخصص للطباعة بالبيانات المتغيرة.",
      "features.excel.title": "استيراد Excel",
      "features.excel.text": "أدخل بيانات الإنتاج إلى مساحة مشروع واضحة ومنظمة.",
      "features.binding.title": "ربط بيانات ذكي",
      "features.binding.text": "اربط الأسماء والأرقام والصور والأكواد والنصوص الطويلة بالطبقة المناسبة.",
      "features.preview.title": "معاينة مباشرة",
      "features.preview.text": "تنقل بين السجلات فورًا قبل تنفيذ التصدير الجماعي.",
      "features.pdf.title": "تصدير PDF",
      "features.pdf.text": "أخرج ملفات جاهزة للطباعة بدقة عالية وتشطيب احترافي.",
      "features.language.title": "العربية والإنجليزية",
      "features.language.text": "تعامل مع مشاريع ثنائية اللغة بواجهتي الوضع الداكن والفاتح.",
      "features.platform.title": "Windows و macOS",
      "features.platform.text": "امنح فرق الإنتاج المختلطة نفس تجربة سطح المكتب الموثوقة.",
      "bento.title": "مكتبة قوالب، محرر طباعة حر، حفظ وفتح المشاريع.",
      "bento.text": "نظم الأعمال المتكررة، وافتح مشاريع العملاء مرة أخرى، وجهز تخطيطات الطباعة بدون إعادة بناء نفس الإعدادات كل مرة.",
      "bento.dark.title": "الوضع الداكن",
      "bento.dark.text": "لجلسات الاستوديو الطويلة.",
      "bento.light.title": "الوضع الفاتح",
      "bento.light.text": "للمراجعة داخل المكتب.",
      "screens.eyebrow": "لقطات البرنامج",
      "screens.title": "مساحة عمل جادة لحجم إنتاج جاد.",
      "compare.eyebrow": "قبل وبعد",
      "compare.title": "الفارق ليس بسيطًا. إنه نموذج إنتاج مختلف.",
      "compare.manual.label": "الطريقة اليدوية",
      "compare.manual.title": "افتح، عدّل، صدّر، أعد التسمية، وكرر.",
      "compare.manual.text": "بطء، إرهاق، ملفات غير متناسقة، وأخطاء تصبح مكلفة وقت الطباعة.",
      "compare.shift.label": "Layers Shift",
      "compare.shift.title": "استورد، اربط، عاين، ولّد، اطبع.",
      "compare.shift.text": "مسار عمل مضبوط يحافظ على تركيز المصممين وجودة الإنتاج.",
      "value.eyebrow": "قيمة الإنتاج",
      "value.title": "مشروع كبير واحد يمكنه تغطية تكلفة Layers Shift",
      "value.manual.label": "التعديل اليدوي",
      "value.manual.time": "أكثر من 8 ساعات",
      "value.manual.item1": "مئات التعديلات المتكررة",
      "value.manual.item2": "احتمالية أعلى لحدوث الأخطاء",
      "value.shift.label": "Layers Shift",
      "value.shift.time": "دقائق",
      "value.shift.item1": "أتمتة عبر Excel",
      "value.shift.item2": "نتائج متناسقة",
      "value.shift.item3": "جاهز للطباعة",
      "pricing.eyebrow": "الأسعار",
      "pricing.title": "اختر الترخيص المناسب لطبيعة إنتاجك.",
      "pricing.text": "الشراء يتم عبر واتساب. بعد الدفع تحصل على مفتاح الترخيص ورابط البرنامج ودليل التثبيت وخطوات التفعيل.",
      "pricing.single.label": "Single Device",
      "pricing.single.price": "990 جنيه",
      "pricing.single.text": "مثالي للمستقلين والمصممين الأفراد.",
      "pricing.studio.label": "Studio",
      "pricing.studio.badge": "الأكثر طلبًا",
      "pricing.studio.price": "2490 جنيه",
      "pricing.studio.text": "مصمم لاستوديوهات الطباعة المحترفة والوكالات.",
      "pricing.team.label": "Team",
      "pricing.team.price": "3990 جنيه",
      "pricing.team.text": "مصمم للمؤسسات التي تعمل بإنتاج تعاوني.",
      "pricing.educational.label": "التعليم",
      "pricing.educational.title": "المدارس والجامعات",
      "pricing.educational.text": "للشهادات وبطاقات الهوية وكروت الطلاب وفرق الفعاليات.",
      "pricing.lifetime.label": "ترخيص مدى الحياة",
      "pricing.lifetime.title": "استوديوهات محترفة",
      "pricing.lifetime.text": "بدون اشتراك. مناسب للمصممين والوكالات والمطابع التي تنفذ أعمالًا متكررة.",
      "pricing.enterprise.label": "المؤسسات",
      "pricing.enterprise.title": "فرق إنتاج كبيرة",
      "pricing.enterprise.text": "للجهات الحكومية والموارد البشرية وعمليات الطباعة متعددة المقاعد.",
      "pricing.contact": "تواصل للمبيعات",
      "pricing.buy": "اشتر الآن",
      "pricing.choose": "اختر الباقة",
      "faq.eyebrow": "الأسئلة الشائعة",
      "faq.title": "إجابات واضحة قبل الشراء.",
      "faq.q1": "هل Layers Shift سكربت أو إضافة فوتوشوب؟",
      "faq.a1": "لا. Layers Shift هو تطبيق سطح مكتب احترافي لأتمتة الطباعة بكميات كبيرة باستخدام البيانات المتغيرة.",
      "faq.q2": "كيف يتم الشراء؟",
      "faq.a2": "الشراء يتم عبر واتساب. بعد الدفع تحصل على مفتاح الترخيص ورابط البرنامج ودليل التثبيت وخطوات التفعيل.",
      "faq.q3": "هل يدعم العربية والإنجليزية؟",
      "faq.a3": "نعم. Layers Shift مصمم لمشاريع الإنتاج ثنائية اللغة، بما في ذلك العربية والإنجليزية.",
      "faq.q4": "هل يصدر ملفات PDF جاهزة للطباعة؟",
      "faq.a4": "نعم. مسار التصدير مصمم لإخراج ملفات عالية الدقة جاهزة للطباعة.",
      "faq.q5": "هل هو برنامج باشتراك؟",
      "faq.a5": "لا. Layers Shift يعتمد على ترخيص مدى الحياة، ويتم توضيح شروط التحديثات أثناء الشراء.",
      "final.title": "جاهز لأتمتة إنتاجك؟",
      "final.text": "توقف عن استهلاك ساعات التصميم في تعديلات متكررة. مرر ملف Excel القادم عبر Layers Shift وسلّم الإنتاج كاملًا بثقة.",
      "footer.company": "الشركة",
      "footer.social": "التواصل الاجتماعي",
      "footer.whatsapp": "واتساب",
      "footer.docs": "الدليل",
      "footer.privacy": "الخصوصية",
      "footer.license": "الترخيص",
      "footer.copy": "© 2026 Layers Shift. برنامج احترافي للطباعة بالبيانات المتغيرة."
    }
  }
};

const getLanguage = (language) => (translations[language] ? language : "en");

const updateMeta = (language) => {
  const config = translations[language];
  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');

  document.title = config.metaTitle;
  description?.setAttribute("content", config.metaDescription);
  ogDescription?.setAttribute("content", config.metaDescription);
  ogTitle?.setAttribute("content", config.metaTitle);
};

const updateLanguageSwitcher = (language) => {
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const updateWhatsAppLinks = (language) => {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const messageKey = link.dataset.whatsapp || "general";
    const message = whatsappMessages[language][messageKey] || whatsappMessages[language].general;
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  });
};

const applyLanguage = (language) => {
  const activeLanguage = getLanguage(language);
  const { dictionary } = translations[activeLanguage];

  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = activeLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  updateMeta(activeLanguage);
  updateLanguageSwitcher(activeLanguage);
  updateWhatsAppLinks(activeLanguage);
  localStorage.setItem(languageStorageKey, activeLanguage);
};

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption);
  });
});

applyLanguage(localStorage.getItem(languageStorageKey) || "en");
