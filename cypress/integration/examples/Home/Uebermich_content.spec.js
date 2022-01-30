/// <reference types="cypress" />
describe('Check aboutme page and content', () => {
    it('visits aboutme', () => {
        cy.visit('https://cy-borg.net/hortt-dev/')
        cy.wait(200)
        cy.contains('Über mich').click()

        //Check content area for text and image information//
        cy.get('div.contentRow').within(() => {
            const contentHeadline = cy.get('h1.contentHeadline')
            contentHeadline
        cy.contains('Lernen Sie mich kennen')
            .should('be.visible')
        cy.get('h1')
            .should('contain', 'Lernen Sie mich kennen') // double check maybe just leave it out //
        cy.get('h2')
            .should('contain', 'Manfred Hortt')
        cy.contains('Ihr Berater in Köln und Umgebung')
            .should('be.visible')
        cy.get('img.aboutMe__image')
            .should('be.visible')
            .should(
                        'have.attr',
                        'src',
                        'img/aboutMe.jpg'
                    )    
            .should(
                            'have.attr',
                            'alt',
                            'hortt_aboutMe'
                    )
        cy.contains('Ein paar Eckdaten zu mir:')
            .should('be.visible')    
            
        // ul li bulletpoint check pending //
        })
    }) 
})
