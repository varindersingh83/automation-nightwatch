module.exports = {
  'step one: navigate to ecosia.org': function(browser) {
    browser
      .url('https://www.ecosia.org')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .keys('\uE007', function(done) {
        console.log('=====>   End of step one');
        // browser.expect.element('#carousel_container').to.have.css('display').which.equals('block');
      });
  },

  'step two: click submit': function(browser) {
    browser.assert //   .click('button[type=submit]')
      .containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};
