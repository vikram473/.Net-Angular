$(document).ready(function () {

    $("#submitBtn").click(function () {

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();

        // Validation using jQuery only
        if (name === "" || email === "") {
            $("#message")
                .text("Please enter both Name and Email.")
                .css("color", "red");
        } else {
            $("#message")
                .text("Thank you! Your feedback has been submitted successfully.")
                .css("color", "green");

            // Clear form fields using jQuery
            $("#feedbackForm")[0].reset();
        }

    });

});