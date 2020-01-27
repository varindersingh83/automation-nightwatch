/*
adding debugger for each step. 
.perform(() => {
        debugger;
      })

*/

module.exports = {
  '@tags': ['Hackernews'],
  'Hackernews data scraping': function(browser) {
    browser
      .url('https://news.ycombinator.com/')
      .waitForElementVisible('.hnname')
      .assert.titleContains('Hacker News')
      .perform(() => {
        debugger;
      })
      .assert.containsText('.hnname', 'Hacker News')
      .end();
    //   email: enifyf@vomoto.com
    //   pwd: bot123321
  }
};
