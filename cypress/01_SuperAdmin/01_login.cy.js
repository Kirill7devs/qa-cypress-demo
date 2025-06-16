describe('Login', () => {
  before(() => {
    cy.login()
  })
  it('create session and redirect to offers page', () => {
    cy.visit('/superadmin/offers')
    cy.url().should('include', '/offers')
    })
  })
