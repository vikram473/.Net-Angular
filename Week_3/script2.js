$(document).ready(function () {

    let cartCount = 0;

    // Event Delegation
    $("#productList").on("click", ".addToCart", function () {

        // Increase cart counter
        cartCount++;
        $("#cartCount").text(cartCount);

        // Disable button
        $(this).prop("disabled", true);
        $(this).attr("title", "Already added");

        // Show confirmation message
        $(this)
            .siblings(".message")
            .text("Added to cart ✔");

    });

});