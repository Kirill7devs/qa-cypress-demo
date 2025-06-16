describe('Create new offer', () => {
  it('a offers should create in super admin panel', () => {
    cy.fixture('../fixtures/SuperAdmin/createOffer.json').then((NewOfferData) => {
      cy.login()
      cy.visit('/superadmin/offers')

      cy.get('[data-cy="create-offer"]').as('NewOfferButton')
      cy.get('@NewOfferButton').should('exist').and('be.visible').click()

      cy.get('[data-cy="upload-picture"]').attachFile('SuperAdmin/Picture/offerPicture.jpg')
      cy.get('[data-cy="offer-title"]').type(NewOfferData.offer_title)
      cy.get('[data-cy="offer-description"]').type(NewOfferData.offer_description)
      cy.get('[data-cy="offer-promocode"]').type(NewOfferData.offer_promocode)

      const getFutureDate = (daysAhead) => {
        const date = new Date()
        date.setDate(date.getDate() + daysAhead)
        return {
          day: date.getDate().toString(),
          month: date.getMonth(),
          year: date.getFullYear()
        }
      }

      const selectDate = (datePickerSelector, targetDate) => {
        cy.get(datePickerSelector).click()

        const currentDate = new Date()
        const currentMonth = currentDate.getMonth()
        const currentYear = currentDate.getFullYear()

        const monthDifference = (targetDate.year - currentYear) * 12 + (targetDate.month - currentMonth)

        if (monthDifference > 0) {
          cy.get('[aria-label="Next month"]').click({ multiple: true, times: monthDifference })
        }

        cy.get('button')
          .contains(targetDate.day)
          .should('be.visible')
          .click()
      }

      const startDate = getFutureDate(2)
      const endDate = getFutureDate(4)

      selectDate('[data-cy="date-picker-start"]', startDate)
      cy.get('[data-cy="date-picker-end"]', { timeout: 10000 }).click()
      cy.get('button').should('be.visible')
      selectDate('[data-cy="date-picker-end"]', endDate)

      cy.get('[data-cy="offer-submit"]').click()
      cy.contains('Offer was created successfully').should('be.visible')
    })
  })
})
