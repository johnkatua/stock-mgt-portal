import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://lakehouseenterprise.biz/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    SHORT_WAIT: 500,
    MEDIUM_WAIT: 7000,
  },
  watchForFileChanges: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  video: true,
  videoCompression: true,
});
