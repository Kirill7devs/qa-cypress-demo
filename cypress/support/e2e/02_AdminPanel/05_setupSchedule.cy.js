describe('Setup Schedule', () => {
  it('Schedule should be setup to the admin panel', () => {
    cy.fixture('../fixtures/AdminPanel/createStylist.json').then((NewStylistData) => {
      cy.loginAdminPanel()
      cy.visit('/mysalon/stylists')
      cy.contains('tr', 'Cypress Stylist').click()
      cy.get('[data-cy="schedule-tab"]').click()
      cy.get('[data-cy="schedule-setup"]').click()
      cy.get('[data-cy="calendar-picker"] button.MuiPickersDay-root:not([disabled])')
      .should('have.length.at.least', 2)
      .then(($days) => {
        cy.wrap($days[0]).click();
        cy.wrap($days[1]).click();
        cy.get('button[type="submit"]').click();

        cy.intercept('POST', '/graphql').as('graphqlRequest');
        cy.wait('@graphqlRequest')
          .its('response.statusCode')
          .should('eq', 200);
      });
    })
  })
})
