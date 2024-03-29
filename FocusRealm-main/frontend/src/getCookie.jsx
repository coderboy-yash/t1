

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    const cookieArr = document.cookie.split(';');

    // Loop through the array elements
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');

        // Remove whitespace from the cookie name and compare it with the provided name
        if (name === cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if cookie not found
    return null;
}