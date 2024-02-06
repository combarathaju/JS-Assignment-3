"use strict";

$(document).ready(() => {
    // Retrieve profile information from session storage
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");
    const postal = sessionStorage.getItem("postal");
    const dob = sessionStorage.getItem("dob");

    // Display the retrieved information in the span elements
    $("#email").text(email);
    $("#phone").text(phone);
    $("#postal").text(postal);
    $("#dob").text(dob);

    $("#back").click(() => {
        // Use the history object to go back to the previous page
        window.history.back();
    });
});