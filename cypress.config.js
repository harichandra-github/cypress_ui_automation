const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "7xfmu9",
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    timestamp: "longDate"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:"cypress/integration/examples/*.js",
    defaultCommandTimeout: 10000

  },
});
