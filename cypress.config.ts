import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    SHORT_WAIT: 500,
    MEDIUM_WAIT: 7000,
  },
  watchForFileChanges: false,
});
