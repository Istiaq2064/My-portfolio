// script.js

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".menu-link");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking a link
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Contact form (just front-end validation + message)
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      contactStatus.textContent = "Please fill all fields.";
      contactStatus.style.color = "#f97373"; // red
      return;
    }

    // এখানে আসলে backend দরকার real mail পাঠানোর জন্য।
    // এখন demo হিসেবে শুধু success message দেখাচ্ছি।
    contactStatus.textContent = "Thank you! Your message has been received.";
    contactStatus.style.color = "#4ade80"; // green

    contactForm.reset();
  });
}
