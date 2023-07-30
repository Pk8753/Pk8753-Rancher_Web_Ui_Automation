const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config
      // implement node event listeners here
    },
    reporter:'cypress-mochawesome-reporter',
    specPattern :['cypress/integration/specs/*.spec.js'],
    requestTimeout : 10000,
    // retries: {
    //   runMode:1,
    //   openMode:1,
    // }
  },
});
