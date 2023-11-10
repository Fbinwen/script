// ==UserScript==
// @name         GitHub Raw Link Button
// @namespace    @chxm1023
// @version      1.0
// @icon         https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/github.png
// @description  Add a button to open raw links on GitHub.
// @author       https://t.me/chxm1023
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to open raw link
    function openRawLink() {
        // Remove '/blob' from the URL and replace 'github.com' with 'raw.githubusercontent.com'
        var rawUrl = window.location.href.replace('/blob', '').replace('github.com', 'raw.githubusercontent.com');
        window.location.href = rawUrl;
    }

    // Create a button and add it to the page
    var rawButton = document.createElement('button');
    rawButton.innerHTML = '源码';

    // Set the button position to the top-right corner
    rawButton.style.position = 'fixed';
    rawButton.style.top = '680px'; // Adjust as needed
    rawButton.style.right = '15px'; // Adjust as needed

    rawButton.addEventListener('click', openRawLink);

    // Append the button to the body of the document
    document.body.appendChild(rawButton);
})();