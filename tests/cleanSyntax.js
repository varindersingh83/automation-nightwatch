module.exports = {
  '@tags': ['navigation'],
  '@disabled': true,
  'step one: navigate to ecosia.org': function(browser) {
    browser
      .url('https://beezwax-qa-exercise.firebaseapp.com/')
      .waitForElementVisible('body')
      .click('#home_button')
      .url(function(result) {
        this.assert.equal(
          result.value,
          'https://beezwax-qa-exercise.firebaseapp.com/',
          'Url is correct for login screen '
        );
      });
  }
};
