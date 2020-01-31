module.exports = {
  '@tags': ['hn'],
  '@disabled': true,
  'Hackernews data scraping': function(browser) {
    var clickElement = 9;
    try {
      browser
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('.hnname')
        .elements('css selector', '.athing > .title > .storylink', function(
          result
        ) {
          result.value.map(function(element, err) {
            browser.elementIdAttribute(element.ELEMENT, 'innerText', function(
              res
            ) {
              console.log(res.value);
              if (res.value == 'The Rust Compilation Model Calamity') {
                browser
                  .elementIdClick(element.ELEMENT)
                  .pause(300)
                  .saveScreenshot('./screenshots/HN' + Date.now() + '.png')
                  .back();
              }
            });
          });
        })
        .pause(1000)
        .assert.titleContains('Hacker News')
        .assert.containsText('.hnname', 'Hacker News')
        .end();
    } catch (error) {
      // console.error(error);
      browser.saveScreenshot('./screenshots/error' + Date + '.png').end();
    }
  }
};
