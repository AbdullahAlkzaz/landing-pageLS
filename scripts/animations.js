const revealItems = document.querySelectorAll("[data-reveal]");
revealItems.forEach((el) => el.classList.add("opacity-0", "translate-y-7", "transition-all", "duration-700"));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-7");
      entry.target.classList.add("opacity-100", "translate-y-0");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));