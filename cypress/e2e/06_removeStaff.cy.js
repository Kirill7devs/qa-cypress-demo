describe('Remove Staff', () => {
  it('a staff should remove in super admin panel', () => {
      cy.login()
      cy.visit('/superadmin/staff')
      cy.contains('tr', 'Cypress Cy').find('input[type="checkbox"]').click()
      cy.get('[data-cy="more-button-staff"]').click()
      cy.get('[data-cy="remove-staff-button"]').click()
      cy.contains('Staff was removed successfully').should('be.visible')
  })
})
