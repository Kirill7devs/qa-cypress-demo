describe('Remove Offer', () => {
  it('a offer should remove in super admin panel', () => {
      cy.login()
      cy.visit('/superadmin/Offers')
      cy.get('tr')
      .filter(':contains("Cypress")')
      .filter(':contains("offer")')
      .first()
      .find('[data-cy="delete-button"]', { timeout: 10000 })
      .should('be.visible')
      .click();
      cy.get('[data-cy="confirm-delete"]').click();
      cy.contains('Offer Cypress was successfully deleted').should('be.visible')
  })
})
