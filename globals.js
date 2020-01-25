/* Add to  globals.js */
const HtmlReporter = require('@rpii/nightwatch-html-reporter');

const htmlReporter = new HtmlReporter({
  openBrowser: true,
  reportTitle: 'Your Portal'
});

module.exports = {
  reporter: htmlReporter.fn,

  //gets the browser options into the report
  beforeEach: function(browser, done) {
    htmlReporter.setBrowserOptions(browser.options);
    done();
  }
};
