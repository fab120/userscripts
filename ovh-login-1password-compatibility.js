// ==UserScript==
// @name        OVH login form 1Password compatibility
// @namespace   fab120/www.ovh.com
// @match       https://www.ovh.com/auth/
// @grant       none
// @run-at      document-end
// @version     1
// @author      fab120
// @downloadURL https://raw.githubusercontent.com/fab120/userscripts/main/ovh-login-1password-compatibility.js
// ==/UserScript==

(function () {
  function adjustForm(selector, placeholder)
  {
    let fields = document.querySelectorAll(selector);

    if (fields.length === 0) {
      return;
    }

    let field = fields[0];

    field.placeholder = placeholder;
    field.nextElementSibling.remove();
  }

  adjustForm('.create-account-input[type="text"]', 'Username');
  adjustForm('.create-account-input[type="password"]', 'Password');
})();
