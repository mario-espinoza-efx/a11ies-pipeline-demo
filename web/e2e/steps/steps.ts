import { browser, By, until } from 'protractor';
import { expect } from 'chai';
import { Given, Then } from 'cucumber';
// For accessibility
const axe = require('axe-webdriverjs');
const AxeReport = require('axe-reports');

// Navigate to angular page
Given('Navigate to page {string}', async (url: string) => {
  await browser.get(url);
});

// Navigate to non-angular page
Given('Navigate to non-angular page {string}', async (url: string) => {
  browser.waitForAngularEnabled(false);
  await browser.get(url, 50000);
});

Then('I wait for {string} to load', async (expectedUrl: string) => {
  browser.driver.wait(() => {
    return browser.driver.getCurrentUrl().then((currentUrl) => {
      return currentUrl.includes(expectedUrl);
    });
  }, 10000);
  browser.driver.wait(until.elementLocated(By.id('login-email')));
});

/** Accessibility step — https://github.com/dequelabs/axe-webdriverjs */
Then('The page should be accessible', async () => {
  /** Available tags: wcag2a, wcag2aa, wcag21a, wcag21aa,
   * section508, best-practice, experimental, cat.
   */
  const results = await axe(browser.driver).analyze();

  /** Check the results for violations. If there are any, indicate
   * what they are.
   */
  AxeReport.processResults(results, 'csv', './e2e/reports/test-results', true);
  expect(results.violations.length).to.be.equal(
    0,
    `Accessibility Violations Found: ${JSON.stringify(
      results.violations,
      null,
      2
    )}`
  );
});
