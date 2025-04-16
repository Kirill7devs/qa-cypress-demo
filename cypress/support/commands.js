Cypress.Commands.add('login', () => {
  const email = Cypress.env('email')
  const password = Cypress.env('password')

  cy.session(email, () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[data-cy="submit"]').click(),
    cy.wait(3000)
  }, {
    cacheAcrossSpecs: true
  })
})

Cypress.Commands.add('loginAdminPanelClearSession', () => {
  const email = Cypress.env('email')
  const password = Cypress.env('password')

  Cypress.session.clearAllSavedSessions()

  cy.session(email, () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[data-cy="submit"]').click()
    cy.contains('Cypress Salon').should('be.visible').click()
    cy.get('[data-cy="control-admin-panel"]').should('be.visible').click()
  }, {
    cacheAcrossSpecs: true
  })
})

Cypress.Commands.add('loginAdminPanel', () => {
  const email = Cypress.env('email')
  const password = Cypress.env('password')

  cy.session(email, () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[data-cy="submit"]').click()
    cy.contains('Cypress Salon').should('be.visible').click()
    cy.get('[data-cy="control-admin-panel"]').should('be.visible').click()
  }, {
    cacheAcrossSpecs: true
  })
})
import 'cypress-file-upload';
