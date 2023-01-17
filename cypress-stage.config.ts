import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com',
    requestTimeout: 20000,
    responseTimeout: 20000,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    downloadsFolder: './cypress/downloads',
    trashAssetsBeforeRuns: true,
    watchForFileChanges: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportDir: './cypress/report',
      reportPageTitle: 'Test Automation report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    pathSite1: '/AutomationPractice/',
    pathSite2: '/client/auth/login',
  },
});
