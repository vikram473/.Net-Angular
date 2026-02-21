function showUser() {
    // Object created inside function (no global variables)
    var user = {
        name: "Vikram",
        age: 23,
        city: "Hyderabad"
    };

    // Call function and pass object
    displayUserInfo(user);
}

function displayUserInfo(userObj) {
    // Access object properties using dot notation
    document.getElementById("name").innerText = "Name: " + userObj.name;
    document.getElementById("age").innerText = "Age: " + userObj.age;
    document.getElementById("city").innerText = "City: " + userObj.city;
}