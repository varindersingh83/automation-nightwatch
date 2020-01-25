const config = require('../config.js');

module.exports = {
  '@tags': ['goodreads'],
  'SignIn with enter key': function(browser) {
    const email = config.goodreads.SignIn.email;
    const password = config.goodreads.SignIn.password;

    const page = browser.page.goodreadsSignin();

    page
      .navigate()
      .waitForElementVisible('body')
      .assert.titleContains('Goodreads')
      .assert.visible('@emailInput')
      .signInCredentials(email, password);

    browser
      // .saveScreenshot('./screenshots/signIn.png')
      .keys('\uE007')
      .pause(1000)
      // .saveScreenshot('./screenshots/homepage.png')
      .end();
  },
  'SignIn with Sign in button': function(browser) {
    const email = config.goodreads.SignIn.email;
    const password = config.goodreads.SignIn.password;

    const emailInput = '#userSignInFormEmail';
    const passwordInput = '#user_password';
    const singInButton = '.gr-button';
    const page = browser.page.goodreadsSignin();
    page
      .navigate()
      .waitForElementVisible('body')
      .assert.titleContains('Goodreads')
      .assert.visible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passwordInput', password)
      // .saveScreenshot('./screenshots/signIn.png')
      .click('@singInButton')
      // .saveScreenshot('./screenshots/signIn.png')
      // .keys('\uE007')
      .pause(1000)
      // .saveScreenshot('./screenshots/homepage.png')
      .end();
  }
};
