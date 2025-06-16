describe('Send New Message', () => {
  it('The message should be sent to the consumer', () => {
    cy.fixture('../fixtures/AdminPanel/createStylist.json').then((NewStylistData) => {
      cy.loginAdminPanel()
      cy.visit('/mysalon/consumers')
      cy.contains('tr', 'Cypress Consumer').click()
      cy.get('[data-cy="messaging-tab"]').click()
      cy.get('[data-cy="new-message-button"]').click()
      cy.get('[data-cy="checkbox-sms"]').click()
      cy.get('[data-cy="input-title"]').click().type('cypress test')
      cy.get('[data-cy="input-message"]').click().type('cypress test message')
      cy.get('[data-cy="button-send-message"]').click()
      cy.get('[data-cy="button-confirm-dialog"]').click()
      
      //cy.contains('Booking was created successfully').should('be.visible')
    })
  })
})