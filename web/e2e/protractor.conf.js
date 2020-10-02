// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// Use this — interprets .ts as .js
require('ts-node').register({ project: './e2e/tsconfig.e2e.json' });

// Needed for cucumber html reporting
const reporter = require('cucumber-html-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  // "Custom" as we"re using the protractor version of cucumber
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  allScriptsTimeout: 11000,

  // Require feature files
  specs: [
    './features/**.feature', // accepts a glob
  ],

  capabilities: {
    browserName: 'chrome',
    firefoxOptions: {
      args: ['--headless'],
    },
    chromeOptions: {
      args: [
        ' —-headless',
        ' —-disable-gpu',
        '--no-sandbox',
        '--remote-debugging-port=9222',
      ],
    },
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  cucumberOpts: {
    // This is where the results are stored
    format: ['json:./e2e/reports/results.json'],
    // Requires these files on test launch
    require: ['./steps/*.ts'],
    timeout: 20000,
    tags: true,
  },
  // When the tests are finished running
  afterLaunch() {
    // Configure reporting options
    const options = {
      columnLayout: 1,
      theme: 'bootstrap',
      jsonFile: './e2e/reports/results.json',
      output: './e2e/reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      timeout: 20000,
    };

    // Generate the report
    reporter.generate(options);
  },
};
