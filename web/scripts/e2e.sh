npx ng serve &
npx wait-on http://localhost:4200 && cd e2e
npx webdriver-manager update
npx protractor protractor.conf.js

kill -9 $(lsof -i tcp:4200 | grep "^node [0-9 ]*" |  awk '{print $2}')