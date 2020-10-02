npx ng serve &
npx webdriver-manager update
npx wait-on http://localhost:4200 && npx protractor e2e/protractor.conf.local.js


kill -9 $(lsof -i tcp:4200 | grep "^node [0-9 ]*" |  awk '{print $2}')
