document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  setupActiveNav();
  setupForm();
});

/* =========================
   MOBILE MENU
========================= */
function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* =========================
   ACTIVE NAV LINK
========================= */
function setupActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

/* =========================
   CONTACT FORM
========================= */
function setupForm() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!validateEmail(email.value)) {
      alert("Please enter a valid email");
      return;
    }

    if (message.value.trim().length < 10) {
      alert("Please enter more details about your project");
      return;
    }

    // Success (temporary since no backend)
    alert("Your request has been received. We will contact you soon.");

    form.reset();
  });
}

/* =========================
   EMAIL VALIDATION
========================= */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
