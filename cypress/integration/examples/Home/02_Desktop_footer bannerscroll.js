/// <reference types="cypress" />
describe('Scrolls down to footer, clicks cookie banner, checks if impressum is visible', () => {
    it('.scrollIntoView() - scroll an element into view', () => {
        cy.visit('https://cy-borg.net/hortt-dev/#')
        // scroll the button into view, as if the user had scrolled
        cy.get('footer').scrollIntoView().should('be.visible')
    })
})
