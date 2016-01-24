module.exports = {
  'Enter login credentials': function(browser) {
    var data = browser.globals;

    // Open browser
    browser.url(browser.launch_url);

    browser.setValue("//*[@data-test-id='enter-email']", data.credentials.email);
    browser.setValue("//*[@data-test-id='enter-password']", data.credentials.password);
  },

  'Submit login': function(browser) {
    browser.click("//*[@data-test-id='submit-login']");
    browser.waitForElementVisible("//*[@data-test-id='status-login']", 1000);

    // Close browser
    browser.end();
  }
};
