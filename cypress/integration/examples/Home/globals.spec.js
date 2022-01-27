/// <reference types="cypress" />
describe('Home page is reachable', () => {
    it('visits website', () => {
        cy.visit('https://cy-borg.net/hortt-dev/')
        cy.wait(200)
        cy.get('.topHeader').within(() => {
            const adressLink = cy.get('a.topHeader__topLink').first()
            adressLink
                .should('be.visible')
                .should(
                    'have.attr',
                    'href',
                    'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWyqed_swv0cRHVz_JtTf3is&key=AIzaSyBTbcdtZtzIhGxf_NGZMl_7DnltsEACCQ0',
                )
                .should('have.attr', 'target', '_blank')
        })
    })
})
