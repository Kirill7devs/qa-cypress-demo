describe('Create Service', () => {
    it('should create a new service', () => {
      cy.fixture('../fixtures/AdminPanel/createServices.json').then((NewServiceData) => {
      cy.loginAdminPanel()
      cy.visit('/mysalon/settings/services')
      cy.get('[data-cy=add-service-admin]').click()
      cy.get('[data-cy=service-title]').clear().type(NewServiceData.title)
      cy.get('[data-cy=service-select-hour]').click()
      cy.contains('[role="option"]', '01').click()
      cy.get('[data-cy=service-cost]').type(NewServiceData.cost)
      cy.get('input[type="file"]').should('exist').attachFile('AdminPanel/test_image.jpg')
      cy.get('[data-cy=create-service-button]').click()
      cy.contains( 'Service was created successfully').should('be.visible')
    })
  })
})
