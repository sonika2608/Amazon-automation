# Project Name

Amazon Automation

# About this Project

This project contains automation code for Amazon website. Project is build using Playwright with TypeScript. 

# Project Structure
| Directory                                         |	Purpose |
| ----------                                        | -----------|
| Amazon-automation/test/                           | Test case files |
| Amazon-automation/page/	                          | Class file for each feature |
| Amazon-automation/playwright-report/	            | Test results |
| Amazon-automation/global-setup.js /               | Store login session |
| Amazon-automation/playwright.config.js	          | Configuration file for playwright test execution|


# Build with

Node @20

Check here to install node[https://docs.npmjs.com/cli/v7/commands/npm-install]

Check here to see how to download nodeJS [https://nodejs.org/en/download/]

Check here to install playwright [https://playwright.dev/docs/intro]

# Getting Started

#### Step 1
Download github repo from web
[https://github.com/sonika2608/Amazon-automation.git]

#### Step 2
Import project into Visual Studio Code

#### Step 3
Install dependencies
```bash
npm install
```
#### Step 4
Set env variables from terminal for Mac OS
```bash
export USERID=''
export PASSWORD=''
```
Set env variables from terminal for Windows
```bash
$env:USERID=''
$env:PASSWORD=''
```

or create a file in root and save it as .env
```bash
USERID=''
PASSWORD=''
```

# Running Tests

To execute all the test cases, use command
```bash
npx playwright test
```

# Getting Reports

To view report, Use command
```bash
npx playwright show-report
```
