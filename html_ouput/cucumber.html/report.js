$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nehaashokj/git/Cucumber_Framework/src/main/java/Demo.feature");
formatter.feature({
  "line": 1,
  "name": "Login to microsoft outlook",
  "description": "",
  "id": "login-to-microsoft-outlook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Varify outlook",
  "description": "",
  "id": "login-to-microsoft-outlook;varify-outlook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TES-4"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on browser page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user launch outlook",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user has to login with valid credentials email \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on start new",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-to-microsoft-outlook;varify-outlook;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "login-to-microsoft-outlook;varify-outlook;;1"
    },
    {
      "cells": [
        "nehaashokj@maveric-systems.com",
        "@@2ji14cs019"
      ],
      "line": 15,
      "id": "login-to-microsoft-outlook;varify-outlook;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Varify outlook",
  "description": "",
  "id": "login-to-microsoft-outlook;varify-outlook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TES-4"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on browser page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user launch outlook",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user has to login with valid credentials email \"nehaashokj@maveric-systems.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "password \"@@2ji14cs019\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on start new",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefin.user_is_on_browser_page()"
});
formatter.result({
  "duration": 30058663300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.user_launch_outlook()"
});
formatter.result({
  "duration": 3000311100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nehaashokj@maveric-systems.com",
      "offset": 48
    }
  ],
  "location": "StepDefin.user_has_to_login_with_valid_credentials_email(String)"
});
formatter.result({
  "duration": 339850900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@@2ji14cs019",
      "offset": 10
    }
  ],
  "location": "StepDefin.password(String)"
});
formatter.result({
  "duration": 4681613300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.user_click_on_login()"
});
formatter.result({
  "duration": 30514099000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //input[@value\u003d\u0027Yes\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027BRTL059\u0027, ip: \u0027192.168.43.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 76.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200429185419, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 12800, moz:profile: C:\\Users\\nehaashokj\\AppData..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0b468a4d-8328-46ff-be4e-7f95bd53662b\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Yes\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat utility.CommonMethods.clickmethod(CommonMethods.java:11)\r\n\tat stepdefination.test.StepDefin.user_click_on_login(StepDefin.java:54)\r\n\tat ✽.Then user click on login(C:/Users/nehaashokj/git/Cucumber_Framework/src/main/java/Demo.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefin.click_on_start_new()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "#|nehaashok@maveric-systems.com |2ji14cs01oo|"
    }
  ],
  "line": 19,
  "name": "Verify send new mail",
  "description": "",
  "id": "login-to-microsoft-outlook;verify-send-new-mail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@TES-4"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user clicks on button \"\u003cNew Message\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "sent message window will open",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user has to enter sender mail id in \"\u003cTo\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "add subject in  \"\u003csubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user is in message body",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "uesr has to write text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "click on button \"\u003cattched\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "screen navigate to new screen",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "select file to be attached \"\u003cfilepath\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user signout",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "login-to-microsoft-outlook;verify-send-new-mail;",
  "rows": [
    {
      "cells": [
        "New Message",
        "To",
        "subject",
        "attched",
        "filepath"
      ],
      "line": 33,
      "id": "login-to-microsoft-outlook;verify-send-new-mail;;1"
    },
    {
      "cells": [
        "New Message",
        "nehaashokj@maveric-systems.com",
        "Hello",
        "outlook",
        "D:\\hiiiiiiiiiii.txt"
      ],
      "line": 34,
      "id": "login-to-microsoft-outlook;verify-send-new-mail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Verify send new mail",
  "description": "",
  "id": "login-to-microsoft-outlook;verify-send-new-mail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@TES-4"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user clicks on button \"New Message\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "sent message window will open",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user has to enter sender mail id in \"nehaashokj@maveric-systems.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "add subject in  \"Hello\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user is in message body",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "uesr has to write text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "click on button \"outlook\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "screen navigate to new screen",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "select file to be attached \"D:\\hiiiiiiiiiii.txt\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on send",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user signout",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "New Message",
      "offset": 23
    }
  ],
  "location": "StepDefin.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 36011933700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //span[contains(text(),\u0027New message\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027BRTL059\u0027, ip: \u0027192.168.43.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 76.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200429185419, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 12800, moz:profile: C:\\Users\\nehaashokj\\AppData..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0b468a4d-8328-46ff-be4e-7f95bd53662b\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027New message\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat utility.CommonMethods.clickmethod(CommonMethods.java:11)\r\n\tat stepdefination.test.StepDefin.user_clicks_on_button(StepDefin.java:81)\r\n\tat ✽.Given user clicks on button \"New Message\"(C:/Users/nehaashokj/git/Cucumber_Framework/src/main/java/Demo.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefin.sent_message_window_will_open()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nehaashokj@maveric-systems.com",
      "offset": 37
    }
  ],
  "location": "StepDefin.user_has_to_enter_sender_mail_id_in(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 17
    }
  ],
  "location": "StepDefin.add_subject_in(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefin.user_is_in_message_body()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefin.uesr_has_to_write_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "outlook",
      "offset": 17
    }
  ],
  "location": "StepDefin.click_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefin.screen_navigate_to_new_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "D:\\hiiiiiiiiiii.txt",
      "offset": 28
    }
  ],
  "location": "StepDefin.select_file_to_be_attached(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefin.click_on_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefin.user_signout()"
});
formatter.result({
  "status": "skipped"
});
});