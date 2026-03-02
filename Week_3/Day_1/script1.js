$(document).ready(function () {

    $(".faq").click(function () {

        // Toggle selected answer
        $(this).next(".answer").slideToggle();

        // Highlight selected question
        $(this).toggleClass("active");

        // Close other answers and remove highlight
        $(".faq").not(this).removeClass("active");
        $(".answer").not($(this).next()).slideUp();
    });

});