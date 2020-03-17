Feature: Login to microsoft outlook

Scenario Outline: Varify outlook 

Given user is on browser page
When user launch outlook
Then user has to login with valid carencials email "<email>"
And password "<password>"
Then user click on login
And click on start new

Examples:
|email                         |password   |
|nehaashokj@maveric-systems.com|!2ji14cs019|

Scenario Outline:Verify send new mail
Given user clicks on button "<New Message>"
Then sent message window will open
Then user has to enter sender mail id in "<To>"
And add subject in  "<subject>"
When user is in message body
Then uesr has to write text 
Then click on button "<attched>"
When screen navigate to new screen
Then select file to be attached
Then click on send

Examples:
|New Message|To                         |subject|attched|
|New Message|yalinis@maveric-systems.com|Hello|outlook|
