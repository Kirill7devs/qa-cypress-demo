describe('Create new staff', () => {
  it('a staff should create in super admin panel', () => {
    cy.fixture('../fixtures/SuperAdmin/createStaff.json').then((NewStaffData) => {
      cy.login()
      cy.visit('/superadmin/staff')
      cy.get('[data-cy="add-staff-button"]', { timeout: 10000 }).as('NewStaffButton')
      cy.get('@NewStaffButton').should('exist').and('be.visible').click()
      cy.get('[data-cy="upload-picture"]').attachFile('SuperAdmin/Picture/staffAvatar.jpg')
      cy.get('[data-cy="staff-first-name"]').type(NewStaffData.first_name)
      cy.get('[data-cy="staff-last-name"]').type(NewStaffData.last_name)
      cy.get('[data-cy="staff-email"]').type(NewStaffData.email)
      cy.get('[data-cy="staff-phone-number"]').type(NewStaffData.phone).blur();
      cy.get('[data-cy="add-staff-submit"]').click()
      cy.contains('Staff was created successfully').should('be.visible');
    })
  })
})

