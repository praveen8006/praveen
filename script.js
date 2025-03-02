// Toggle the mobile menu
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const bars = document.querySelectorAll(".bar");
const Icon = document.querySelector(".icon");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  bars.forEach((bar) => bar.classList.toggle("hidden"));
  Icon.classList.toggle("hidden");
});

document.body.addEventListener("click", (event) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(event.target) &&
    !mobileMenu.contains(event.target)
  ) {
    navLinks.classList.remove("active");

    bars.forEach((bar) => bar.classList.remove("hidden"));
    closeIcon.classList.add("hidden");
  }
});

const contect = document.querySelector(".contact-form");
contect.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your message!");
});
contect.textContent = "";
