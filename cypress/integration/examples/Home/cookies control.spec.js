/// <reference types="cypress" />

context('click cookie banner, check cookies', () => {
    beforeEach(() => {
        Cypress.Cookies.debug(true)

        cy.visit('https://cy-borg.net/hortt-dev/#/')
    })

    it('should be null first time page is visited', () => {
        cy.getLocalStorage('cookie:accepted').should('equal', null)
    })

    it('should be true after clicking cookies button', () => {
        cy.get('.cookieBanner > .btn').click()
        cy.getLocalStorage('cookie:accepted').should('equal', 'true')
    })
})
