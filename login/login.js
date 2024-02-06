"use strict";

// Function to get a cookie by its name
const getCookieByName = name => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
};
// Function to set a cookie with an optional expiration date
const setCookie = (name, value, days) => {
    let cookie = name + "=" + encodeURIComponent(value);
    if (days) {
        const maxAge = days * 24 * 60 * 60; // Convert days to seconds
        cookie += "; max-age=" + maxAge;
    }
    cookie += "; path=/"; // The cookie is available for the whole site
    document.cookie = cookie;
};
// Function to delete a cookie by setting its max-age to 0
const deleteCookie = name => {
    document.cookie = name + "=; max-age=0; path=/";
};
// Function to navigate to a new page
const goToPage = url => {
    window.location.href = url;
};