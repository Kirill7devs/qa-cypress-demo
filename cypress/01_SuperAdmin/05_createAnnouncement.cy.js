describe('Create new Announcement', () => {
  it('a Announcement should create in super admin panel', () => {
    cy.fixture('../fixtures/SuperAdmin/createAnnouncement.json').then((NewAnnouncementData) => {
      cy.login()
      cy.visit('/superadmin/offers')

      cy.get('[data-cy="create-offer"]').as('NewOfferButton')
      cy.get('@NewOfferButton').should('exist').and('be.visible').click()

      cy.get('[data-cy="radio-announcement"]').click()
      cy.get('[data-cy="upload-picture"]').attachFile('SuperAdmin/Picture/announcementPicture.jpg')

      cy.get('[data-cy="announcement-title"]').type(NewAnnouncementData.announcement_title)
      cy.get('[data-cy="announcement-version-name"]').type(NewAnnouncementData.announcement_version_name)
      cy.get('[data-cy="announcement-description"]').type(NewAnnouncementData.announcement_description)
      cy.get('[data-cy="announcement-recommend-products"]').type(NewAnnouncementData.announcement_recommend_products)

      cy.get('[data-cy="announcement-submit"]').click()
      cy.contains('Announcement was created successfully').should('be.visible')
    })
  })
})
