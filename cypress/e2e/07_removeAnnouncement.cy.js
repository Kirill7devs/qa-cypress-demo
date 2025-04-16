describe('Remove Announcement', () => {
  it('a anouncement should remove in super admin panel', () => {
      cy.login()
      cy.visit('/superadmin/Offers')
      cy.get('tr')
      .filter(':contains("Cypress")')
      .filter(':contains("announcement")')
      .first()
      .find('[data-cy="delete-button"]', { timeout: 10000 })
      .should('be.visible')
      .click();
      cy.get('[data-cy="confirm-delete"]').click();
      cy.contains('Announcement Cypress was successfully deleted').should('be.visible')
  })
})
