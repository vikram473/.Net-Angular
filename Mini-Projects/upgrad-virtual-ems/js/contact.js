document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been submitted successfully!");
    contactForm.reset();
  });
});