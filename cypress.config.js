import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

const { TEST_EMAIL: email, TEST_PASSWORD: password, BASE_URL: baseUrl } = process.env

export default defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/01_SuperAdmin/*.cy.js",
      "cypress/e2e/02_AdminPanel/*.cy.js",
    ],
    baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      email,
      password
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
