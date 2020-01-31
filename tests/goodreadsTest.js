module.exports = {
  '@tags': ['goodreads'],
  '@disabled': true,
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

      .url('https://www.goodreads.com/search')
      .saveScreenshot('./screenshots/homepage.png')
      .click('#search_field_author')
      .setValue('#search_query_main', 'malcom gladwell')
      .keys('\uE007')
      .pause(1000)
      .end();
    //   email: enifyf@vomoto.com
    //   pwd: bot123321
  }
};
