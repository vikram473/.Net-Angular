function generateGreeting() {
    // Get value from input
    var name = document.getElementById("username").value;

    // Local variable inside function
    var message = "Hello, " + name + "! Welcome to our website.";

    // Display greeting
    document.getElementById("greeting").innerText = message;
}