
INTRODUCTION

This project uses Playwright to create an automated testing suite. The main objective of this project is to verify the Search and Product Discovery functionalities of the target web application.

The test suite checks whether users can search for items and apply filters while the system shows correct results according to the test cases which the provided Excel sheet defines.


The test suite is designed to validate the scenarios outlined in the Assignment 1 Test Case document, ensuring that both "Positive Path" and "Negative Case" scenarios are handled correctly by the application.


dependenci

* Prerequisites

node.js
Git

* Installation

git clone <https://github.com/Pabodavidumina123/playwright-project.git>

cd <ASSIGNMENT-1>

npm install

npx playwright install


* RUN THE TEST

npx playwright test

* UI RUN

npx playwright test --ui

* SHOW REPORT

npx playwright show-report

* github 

git init
git add .
git commit -m "Initial commit - Playwright project"
git branch -M main
git remote add origin https://github.com/Pabodavidumina123/playwright-project.git
git push -u origin main