const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true
  });

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  );

  allureWriter(on, config);
  return config;
};

module.exports = defineConfig({
  env: {
    allureReuseAfterSpec: true,
    allureResultsPath: 'allure-results',
    allureReportPath: 'allure-report'
  },
  e2e: {
    baseUrl: 'https://www.way2automation.com',
    video: true,
    specPattern: ['**/*.cy.js', '**/features/*.feature'],
    watchForFileChanges: false,
    setupNodeEvents
  }
});
