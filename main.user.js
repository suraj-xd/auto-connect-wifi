// ==UserScript==
// @name         Auto Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto fill username and password and click login button
// @author       Suraj Gaud
// @match        http://10.10.10.252:8090/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=10.252
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Function to fill the username and password fields and submit the form
  function autoLogin() {
      const username = "Rungtar1"; // Replace with your username
      const password = "Tech9900"; // Replace with your password

      const usernameInput = document.querySelector('input[name="username"]');
      const passwordInput = document.querySelector('input[name="password"]');
      const loginButton = document.querySelector('input[name="btnSubmit"]');

      if (usernameInput && passwordInput && loginButton) {
          // Fill in the username and password fields
          usernameInput.value = username;
          passwordInput.value = password;

          // Click the login button to submit the form
          loginButton.click();
      }
  }

  // Run the autoLogin function when the page is loaded
  window.addEventListener('load', autoLogin);
})();
