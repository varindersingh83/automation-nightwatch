module.exports = {
  'Login to Goodreads.org': function(browser) {
    browser
      .url('https://www.goodreads.com/')
      .waitForElementVisible('body')
      .assert.titleContains('Goodreads')
      .assert.visible('#userSignInFormEmail')
      .setValue('#userSignInFormEmail', 'enifyf@vomoto.com')
      .setValue('#user_password', 'bot123321')
      .saveScreenshot('./screenshots/signIn.png')
      .keys('\uE007')
      .pause(1000)
      .saveScreenshot('./screenshots/homepage.png')
      .end();
    //   email: enifyf@vomoto.com
    //   pwd: bot123321
  }
};
