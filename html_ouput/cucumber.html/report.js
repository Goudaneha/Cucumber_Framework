$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nehaashokj/Downloads/Allica/Demo_maven/src/main/java/Demo.feature");
formatter.feature({
  "line": 1,
  "name": "Login to microsoft outlook",
  "description": "",
  "id": "login-to-microsoft-outlook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Varify outlook",
  "description": "",
  "id": "login-to-microsoft-outlook;varify-outlook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on browser page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user launch outlook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user has to login with valid carencials email \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on start new",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-to-microsoft-outlook;varify-outlook;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 13,
      "id": "login-to-microsoft-outlook;varify-outlook;;1"
    },
    {
      "cells": [
        "nehaashokj@maveric-systems.com",
        "!2ji14cs019"
      ],
      "line": 14,
      "id": "login-to-microsoft-outlook;varify-outlook;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Varify outlook",
  "description": "",
  "id": "login-to-microsoft-outlook;varify-outlook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on browser page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user launch outlook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user has to login with valid carencials email \"nehaashokj@maveric-systems.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "password \"!2ji14cs019\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on start new",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefin.user_is_on_browser_page()"
});
formatter.result({
  "duration": 11934877600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.user_launch_outlook()"
});
formatter.result({
  "duration": 217400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nehaashokj@maveric-systems.com",
      "offset": 47
    }
  ],
  "location": "StepDefin.user_has_to_login_with_valid_carencials_email(String)"
});
formatter.result({
  "duration": 1251757000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!2ji14cs019",
      "offset": 10
    }
  ],
  "location": "StepDefin.password(String)"
});
formatter.result({
  "duration": 4817013400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.user_click_on_login()"
});
formatter.result({
  "duration": 6302091100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.click_on_start_new()"
});
formatter.result({
  "duration": 3000046800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify send new mail",
  "description": "",
  "id": "login-to-microsoft-outlook;verify-send-new-mail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user clicks on button \"\u003cNew Message\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "sent message window will open",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user has to enter sender mail id in \"\u003cTo\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "add subject in  \"\u003csubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is in message body",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "uesr has to write text",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on button \"\u003cattched\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "screen navigate to new screen",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "select file to be attached",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "click on send",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-to-microsoft-outlook;verify-send-new-mail;",
  "rows": [
    {
      "cells": [
        "New Message",
        "To",
        "subject",
        "attched"
      ],
      "line": 29,
      "id": "login-to-microsoft-outlook;verify-send-new-mail;;1"
    },
    {
      "cells": [
        "New Message",
        "yalinis@maveric-systems.com",
        "Hello",
        "outlook"
      ],
      "line": 30,
      "id": "login-to-microsoft-outlook;verify-send-new-mail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Verify send new mail",
  "description": "",
  "id": "login-to-microsoft-outlook;verify-send-new-mail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user clicks on button \"New Message\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "sent message window will open",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user has to enter sender mail id in \"yalinis@maveric-systems.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "add subject in  \"Hello\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is in message body",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "uesr has to write text",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on button \"outlook\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "screen navigate to new screen",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "select file to be attached",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "click on send",
  "keyword": "Then "
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
  "duration": 196773800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.sent_message_window_will_open()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yalinis@maveric-systems.com",
      "offset": 37
    }
  ],
  "location": "StepDefin.user_has_to_enter_sender_mail_id_in(String)"
});
formatter.result({
  "duration": 3118791000,
  "status": "passed"
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
  "duration": 319303600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.user_is_in_message_body()"
});
formatter.result({
  "duration": 1999135200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.uesr_has_to_write_text()"
});
formatter.result({
  "duration": 2237516000,
  "status": "passed"
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
  "duration": 6333551600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.screen_navigate_to_new_screen()"
});
formatter.result({
  "duration": 54500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.select_file_to_be_attached()"
});
formatter.result({
  "duration": 12032627800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefin.click_on_send()"
});
formatter.result({
  "duration": 350651500,
  "status": "passed"
});
});