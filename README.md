# 🤖 RGPV Captcha Solver

Automate the process of solving captchas on the RGPV Student Login page effortlessly, without any user interaction.

## Installation
1. **Prerequisites:** Ensure you have the [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) browser extension installed.

2. **Installation:** Click the link below to install the script:
   <a href="https://github.com/suraj-xd/rgpv-captcha-solver/raw/main/main.user.js" target="_blank">
   <img src="https://img.shields.io/badge/Install-Script-blue.svg" alt="Install Script">
   </a>

3. **API Key:** API-NINJA provides a free API. Create an account on [API-NINJA](https://api-ninjas.com/), obtain your API key, and replace the placeholder in the script.

## Links
- GitHub Repository: [suraj-xd/rgpv-captcha-solver](https://github.com/suraj-xd/rgpv-captcha-solver)

---

Enjoy hassle-free captcha solving for RGPV Student Login. Say goodbye to manual captchas! 😎

## Demo

*Visit the RGPV Student Login page at [https://www.rgpv.ac.in/Login/StudentLogin.aspx](https://www.rgpv.ac.in/Login/StudentLogin.aspx) to see the script in action.*

## Usage in Other Websites

To use this script on other websites, follow these steps:

1. **Add Trigger:** If the captcha-solving process involves triggering an image element, locate the appropriate element on the target website.

   For example, to trigger the image element on the RGPV Student Login page, the script uses the following code:
   ```javascript
   var captchaImageElement = document.querySelector('.captcha img');
