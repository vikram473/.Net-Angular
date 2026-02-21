// ✅ Global variable (outside functions)
var counter = 0;

// Function to update UI
function updateDisplay() {
    document.getElementById("counterValue").innerText = counter;
}

// Function to increment counter
function incrementCounter(step) {
    counter = counter + step;
    updateDisplay();
}

// Function to reset counter
function resetCounter() {
    counter = 0;
    updateDisplay();
}

// Add event listeners (No inline JS)
document.getElementById("incrementBtn").addEventListener("click", function () {
    incrementCounter(1);  // Step value passed as parameter
});

document.getElementById("resetBtn").addEventListener("click", function () {
    resetCounter();
});