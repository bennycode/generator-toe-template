module.exports =
  'Enter login credentials': (browser) ->
    data = browser.globals
    browser.url(browser.launch_url).setValue '//*[@data-uie-name=\'enter-email\']', data.email

  'Submit login credentials': (browser) ->
    browser.click('//*[@data-uie-name=\'do-sign-in\']').end()
