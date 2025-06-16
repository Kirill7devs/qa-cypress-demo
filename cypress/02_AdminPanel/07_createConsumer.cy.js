describe('Create Consumer', () => {
  it('Consumer should be create to the admin panel', () => {
    cy.fixture('../fixtures/AdminPanel/createConsumer.json').then((NewConsumerData) => {
      cy.loginAdminPanel()
      cy.visit('/mysalon/consumers')
      cy.get('[data-cy="add-consumer-button"]').as('NewConsumerButton')
      cy.get('@NewConsumerButton').should('exist').and('be.visible').click()
      cy.get('[data-cy="upload-picture"]').attachFile('AdminPanel/Picture/consumerAvatar.jpg')
      cy.get('[data-cy="consumer-first-name"]').type(NewConsumerData.first_name)
      cy.get('[data-cy="consumer-last-name"]').type(NewConsumerData.last_name)
      cy.get('[data-cy="consumer-email"]').type(NewConsumerData.email)
      cy.get('[data-cy="consumer-phone-number"]').type(NewConsumerData.phone).blur();
      cy.get('[data-cy="add-consumer-submit"]').click()
      cy.contains('Consumer was created successfully').should('be.visible')
      cy.intercept('POST', '/graphql').as('graphqlRequest');
      cy.wait('@graphqlRequest')
        .its('response.statusCode')
        .should('eq', 200);
    })
  })
})
