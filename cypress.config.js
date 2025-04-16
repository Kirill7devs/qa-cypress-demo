import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

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
      email: "example@gmail.com",
      password: "Qwertyu1!",
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
