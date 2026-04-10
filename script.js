document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  setupActiveNav();
  setupForms();
});

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

function setupActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

function setupForms() {
  const forms = document.querySelectorAll("form");
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const message = form.querySelector("#message") || form.querySelector("#details");

      if (name && !name.value.trim()) {
        e.preventDefault();
        alert("Please enter your name.");
        return;
      }

      if (email && !validateEmail(email.value.trim())) {
        e.preventDefault();
        alert("Please enter a valid email address.");
        return;
      }

      if (message && message.value.trim().length < 10) {
        e.preventDefault();
        alert("Please enter more project details.");
        return;
      }

      /* If validation passes, do NOT prevent default.
         The form will submit normally to Formspree. */
    });
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
