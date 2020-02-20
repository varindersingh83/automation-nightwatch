/*
Please write a distinct automation test for each link in 
the application that verifies correct navigation upon clicking the link. 
For example, for the "Login" link on the home page, 
the test would start on the home page, click the "Login" link, 
and assert that the application has navigate to the login page. 
*/
module.exports = {
  '@tags': ['navigation'],
  'Test one: Home - Navigate to home screen': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/')
      .waitForElementVisible('body')
      .click('#home_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/',
          'Url is correct for home '
        );
      })
      .end();
  },

  'Test three: Home - Navigate to Register screen': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/')
      .waitForElementVisible('body')
      .click('#register_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/register',
          'Url is correct for Register '
        );
      })
      .end();
  },

  'Test four: Home - Navigate to forgot password screen': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/')
      .waitForElementVisible('body')
      .click('#forgot_password')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/password',
          'Url is correct for forgot password '
        );
      })
      .end();
  },

  'Test five: Login - Navigate to reset screen.': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/login')
      .waitForElementVisible('body')
      .click('#reset_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/password',
          'Url is correct for reset password '
        );
      })
      .end();
  },

  'Test six: Login - Navigate to register screen.': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/login')
      .waitForElementVisible('body')
      .click('#register_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/register',
          'Url is correct for register '
        );
      })
      .end();
  },

  'Test seven: Login - Navigate to home screen.': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/login')
      .waitForElementVisible('body')
      .click('#home_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/',
          'Url is correct for home screen '
        );
      })
      .end();
  },

  'Test eight: Register - Navigate to login screen.': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/register')
      .waitForElementVisible('body')
      .click('#login_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/login',
          'Url is correct for login screen '
        );
      })
      .end();
  },

  'Test nine: Register - Navigate to home screen.': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/register')
      .waitForElementVisible('body')
      .click('#home_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/',
          'Url is correct for home screen '
        );
      })
      .end();
  },

  'Test ten: Forgot password - Navigate to login screen.': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/password')
      .waitForElementVisible('body')
      .click('#login_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/login',
          'Url is correct for login screen '
        );
      })
      .end();
  },

  'Test eleven: Forgot password - Navigate to home screen.': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/password')
      .waitForElementVisible('body')
      .click('#home_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/',
          'Url is correct for home screen '
        );
      })
      .end();
  }
};
