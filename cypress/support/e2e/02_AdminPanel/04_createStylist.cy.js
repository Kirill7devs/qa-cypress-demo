describe('Create Stylist', () => {
  it('Stylist should be create to the admin panel', () => {
    cy.fixture('../fixtures/AdminPanel/createStylist.json').then((NewStylistData) => {
      cy.loginAdminPanel()
      cy.visit('/mysalon/stylists')
      cy.get('[data-cy="add-stylist-button"]',{ timeout: 10000 }).as('NewStylistButton')
      cy.get('@NewStylistButton').should('exist').and('be.visible').click()
      cy.get('[data-cy="upload-picture"]').attachFile('AdminPanel/Picture/stylistAvatar.jpg')
      cy.get('[data-cy="radio-staff"]').click()
      cy.get('[data-cy="employee-first-name"]').type(NewStylistData.first_name)
      cy.get('[data-cy="employee-last-name"]').type(NewStylistData.last_name)
      cy.get('[data-cy="employee-email"]').type(NewStylistData.email)
      cy.get('[data-cy="employee-phone-number"]').type(NewStylistData.phone).blur();
      cy.get('[data-cy="employee-location"]').click()
      cy.contains('h4', 'Cypress location').closest('li').should('exist').click();
      cy.get('[data-cy="add-service"]').click()
      cy.contains('h4', 'Cypress service').closest('div').find('input[type="checkbox"]').should('exist').check()
      cy.get('[data-cy="employee-services-confirm"]').click()
      cy.get('[data-cy="employee-instagram"]').type(NewStylistData.instagram)
      cy.get('[data-cy="employee-bio"]').type(NewStylistData.bio)
      cy.get('[data-cy="employee-submit"]').click()
      cy.contains('Stylist was created successfully').should('be.visible')
    })
  })
})
