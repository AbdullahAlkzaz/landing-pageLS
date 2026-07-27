const navToggle = document.querySelector(".nav-toggle");
const collapsibles = document.querySelectorAll(".mobile-collapsible");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    collapsibles.forEach((el) => el.classList.toggle("hidden"));
  });
}

document.querySelectorAll(".mobile-collapsible a").forEach((link) => {
  link.addEventListener("click", () => collapsibles.forEach((el) => el.classList.add("hidden")));
});

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    ripple.className = "absolute rounded-full bg-white/45 pointer-events-none animate-ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    ripple.style.transform = "translate(-50%, -50%)";
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
});

const videoFrame = document.querySelector(".video-frame");
if (videoFrame) {
  videoFrame.addEventListener("click", () => videoFrame.classList.toggle("is-playing"));
}