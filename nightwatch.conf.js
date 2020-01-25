const HtmlReporter = require('@rpii/nightwatch-html-reporter');

const htmlReporter = new HtmlReporter({
  openBrowser: true,
  reportTitle: 'Your Portal'
});

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: './screenshots/'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless']
        }
      }
    }
  },
  reporter: htmlReporter.fn,

  //gets the browser options into the report
  beforeEach: function(browser, done) {
    htmlReporter.setBrowserOptions(browser.options);
    done();
  }
};
