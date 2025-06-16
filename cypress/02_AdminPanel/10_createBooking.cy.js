describe('Crete Booking', () => {
  it('Booking should be crete to the admin panel', () => {
    cy.fixture('../fixtures/AdminPanel/createStylist.json').then((NewStylistData) => {
      cy.loginAdminPanel()
      cy.visit('/mysalon/booking')
      cy.get('[data-cy="add-booking"]').as('NewBookingCreate')
      cy.get('@NewBookingCreate').should('exist').and('be.visible').click()
      cy.get('[data-cy="choose-consumer"]').should('be.visible').click()
      cy.contains('li', 'Cypress Consumer').click()
      cy.get('[data-cy="choose-location"]').should('be.visible').click()
      cy.contains('li', 'Cypress location').click()
      cy.get('[data-cy="choose-staff"]').should('be.visible').click()
      cy.contains('li', 'Cypress Stylist').click()
      cy.get('[data-cy="add-service"]').should('be.visible').click()
      cy.contains('h4','Cypress service').click();
      cy.get('button[role="gridcell"]:not([disabled])').first().should('be.visible').click();
      cy.get('[data-cy="time-slots"] button').first().should('be.visible').click();
      cy.get('[data-cy="add-comment"] textarea').first().should('be.visible')
        .type('Cypress comment', { force: true })
        .should('have.value', 'Cypress comment');
      cy.get('[data-cy="create-booking"]').scrollIntoView().should('be.visible').click();
      cy.contains('Booking was created successfully').should('be.visible')
    })
  })
})
