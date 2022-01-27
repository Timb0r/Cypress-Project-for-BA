/// <reference types="cypress" />
describe('Scrolls down to footer, clicks cookie banner, checks if impressum is visible', () => {
    it('click banner, check elements', () => {
        cy.visit('https://cy-borg.net/hortt-dev/')
        cy.get('.cookieBanner > .btn').should('be.visible')
        cy.get('.cookieBanner > .btn').click()
        cy.get('.cookieBanner > .btn').should('not.be.visible')
        cy.get('.bottomFooter__links')
            .scrollIntoView() // Scrolls 'footer' into view
            .should('be.visible')
        cy.get('.bottomFooter__links').contains('Impressum')
        cy.get('.bottomFooter__links').contains('Datenschutz')
    })
})
