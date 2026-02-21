// ✅ Global student object
var student = {
    name: "Vikram",
    rollNo: 101,
    marks: 75
};

// Function to display student profile
function updateStudentProfile(studentObj) {
    var profileDiv = document.getElementById("studentProfile");

    profileDiv.innerHTML =
        "<h3>Student Details</h3>" +
        "<p>Name: " + studentObj.name + "</p>" +
        "<p>Roll No: " + studentObj.rollNo + "</p>" +
        "<p>Marks: " + studentObj.marks + "</p>";
}

// Function to update marks
function updateMarks(newMarks) {
    student.marks = newMarks;     // Update object value
    updateStudentProfile(student); // Refresh display
}

// Initial display
updateStudentProfile(student);

// Button click event
document.getElementById("updateMarksBtn").addEventListener("click", function () {
    updateMarks(85); // New marks passed as parameter
});