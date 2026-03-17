document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("adminEmail").value.trim();
      const password = document.getElementById("adminPassword").value.trim();

      if (email === "admin@upgrad.com" && password === "12345") {
        sessionStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "events.html";
      } else {
        alert("Invalid email or password!");
      }
    });
  }

  // Protect events page
  if (window.location.pathname.includes("events.html")) {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      alert("Unauthorized access! Please login first.");
      window.location.href = "login.html";
    }
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      sessionStorage.removeItem("isLoggedIn");
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
  }
});