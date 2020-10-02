# a11ies-pipeline-demo

This is a proof of concept of Axe running in E2E test scenarios using Protractor and Selenium in an Angular Web Application integrated with GitHub Actions pipeline.

## Build & run

- clone this repository
- checkout to a branch
  - git checkout a11y/pass for passing axe test web application
  - git checkout a11y/fail for failing axe test web application
- cd web
- npm install
- npm run start

## Running local Karma tests

### Host Karma live tests

- npm test

### Run single test run with headless Chrome

- npm run test:headless

## Running local E2E Axe tests with Protractor

- npm run webdriver-update
- npm run protractor
