var db;

// Open/Create Database (CREATE TABLE equivalent)
var request = indexedDB.open("ExpenseDB", 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;

    // Create object store (like CREATE TABLE)
    var objectStore = db.createObjectStore("expenses", {
        keyPath: "id",
        autoIncrement: true
    });

    objectStore.createIndex("title", "title", { unique: false });
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database opened successfully");
};

request.onerror = function (event) {
    console.log("Database error:", event.target.errorCode);
};

// INSERT operation
function addExpense() {
    var title = document.getElementById("title").value;
    var amount = document.getElementById("amount").value;
    var date = document.getElementById("date").value;

    var transaction = db.transaction(["expenses"], "readwrite");

    transaction.onerror = function () {
        alert("Transaction failed while adding expense");
    };

    var objectStore = transaction.objectStore("expenses");

    var expense = {
        title: title,
        amount: amount,
        date: date
    };

    var request = objectStore.add(expense);

    request.onerror = function () {
        alert("Error inserting expense");
    };

    request.onsuccess = function () {
        alert("Expense added successfully");
    };
}

// SELECT operation
function viewExpenses() {
    var list = document.getElementById("expenseList");
    list.innerHTML = "";

    var transaction = db.transaction(["expenses"], "readonly");
    var objectStore = transaction.objectStore("expenses");

    var request = objectStore.openCursor();

    request.onerror = function () {
        alert("Error fetching expenses");
    };

    request.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var li = document.createElement("li");
            li.innerText =
                "ID: " + cursor.value.id +
                " | " + cursor.value.title +
                " | ₹" + cursor.value.amount +
                " | " + cursor.value.date;

            list.appendChild(li);
            cursor.continue();
        }
    };
}

// DELETE operation
function deleteExpense() {
    var id = prompt("Enter Expense ID to delete:");

    var transaction = db.transaction(["expenses"], "readwrite");

    transaction.onerror = function () {
        alert("Transaction failed during delete");
    };

    var objectStore = transaction.objectStore("expenses");
    var request = objectStore.delete(Number(id));

    request.onerror = function () {
        alert("Error deleting expense");
    };

    request.onsuccess = function () {
        alert("Expense deleted successfully");
    };
}