// Scroll reveal and subtle parallax
const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const heroVisual = document.querySelector(".hero-visual");
window.addEventListener("scroll", () => {
  if (!heroVisual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const offset = Math.min(window.scrollY * 0.04, 28);
  heroVisual.style.transform = `translateY(${offset}px)`;
}, { passive: true });
