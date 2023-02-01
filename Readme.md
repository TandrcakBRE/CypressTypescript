# README

### Set up project

- After cloning project open terminal in Visual Studio Code in project folder and run this command:"npm install". This will install all node modules and dependencies from package.json file.
- When all modules are installed create Cypress.env.json file and place it next to config.ts files in your project. This file is added in .gitignore and it should contain your personal username and password, because of that it should not be pushed to git. File example is below, just add your username and password in "".
  {
  "userEmail": "",
  "userPassword": ""
  }

- There are 2 ways to run cypress tests, in open and run mode.
- To run cypress in open mode run this command in terminal: "npm run cy:open:stage". This will open cypress runner which will allow you to manualy run specific files, good thing for debugging or when creating new test cases.
- To run cypress in run mode use this command: "npm run cy:run:stage". This will execute all tests from e2e folder with .cy.ts extension. Also this will create report, screenshots (only for failed tests) and videos for executed tests.

### Set up prettier

(This is optional, prettier is just code formatter)

- install prettier extension
- settings->prettier config-> prettier require config check
- settings->format->format on save check
- settings->default->prettier code formatter choose
