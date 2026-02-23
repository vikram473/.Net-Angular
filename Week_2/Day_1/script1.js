function validateName() {
    var name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameMsg").innerText = "Name cannot be empty";
    } else {
        document.getElementById("nameMsg").innerText = "Valid Name";
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.indexOf("@") === -1) {
        document.getElementById("emailMsg").innerText = "Email must contain @";
    } else {
        document.getElementById("emailMsg").innerText = "Valid Email";
    }
}

function validateAge() {
    var age = document.getElementById("age").value;
    if (age <= 18) {
        document.getElementById("ageMsg").innerText = "Age must be greater than 18";
    } else {
        document.getElementById("ageMsg").innerText = "Valid Age";
    }
}

function saveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    if (name !== "" && email.indexOf("@") !== -1 && age > 18) {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("age", age);
        alert("User data saved successfully");
    } else {
        alert("Please fix validation errors");
    }
}