const button = document.getElementById("feedbackBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "Thank you for your feedback!";
});