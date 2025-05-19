import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

const {email: TEST_EMAIL, password: TEST_PASSWORD} = process.env
export default defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/01_SuperAdmin/*.cy.js",
      "cypress/e2e/02_AdminPanel/*.cy.js",
    ],
    baseUrl: "http://localhost:8000",
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
