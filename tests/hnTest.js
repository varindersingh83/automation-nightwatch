module.exports = {
  'Hackernews data scraping': function(browser) {
    browser
      .url('https://news.ycombinator.com/')
      .waitForElementVisible('.hnname')
      .assert.titleContains('Hacker News')
      .assert.containsText('.hnname', 'Hacker News')
      .end();
    //   email: enifyf@vomoto.com
    //   pwd: bot123321
  }
};
