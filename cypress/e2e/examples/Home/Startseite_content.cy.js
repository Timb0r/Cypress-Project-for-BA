/// <reference types="cypress" />
describe('Check homepage and content', () => {
    beforeEach(() => {
        cy.visit('https://cy-borg.net/hortt-dev/');
    });
    context('check topheader links', () => {
        //Check for all 3 toplinks //
        cy.get('.topHeader').within(() => {
            it('check adress link', () => {
                const adressLink = cy.get('a.topHeader__topLink').first();
                adressLink
                    .should('be.visible')
                    .should(
                        'have.attr',
                        'href',
                        'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWyqed_swv0cRHVz_JtTf3is&key=AIzaSyBTbcdtZtzIhGxf_NGZMl_7DnltsEACCQ0',
                    )
                    .should('have.attr', 'target', '_blank');
            });
            const phoneNumber = cy.get('a.topHeader__topLink').next();
            phoneNumber
                .should('be.visible')
                .should('have.attr', 'href', 'tel:+4917699392965')
                .should('have.attr', 'target', '_blank');
            const sendEmail = cy.get('a.topHeader__topLink').last();
            sendEmail
                .should('be.visible')
                .should(
                    'have.attr',
                    'href',
                    'mailto:beratung@hortt-baufinanzierung.de',
                )
                .should('have.attr', 'target', '_blank');
        });

        // Check for background image and logo//
        cy.get('.topHeader').within(() => {
            const headerImage = cy.get('img.topHeader__image');
            headerImage
                .should('be.visible')
                .should('have.attr', 'src', 'img/header.jpg');
        });
        cy.get('.topHeader').within(() => {
            const logoImage = cy.get('div.topHeader__logoArea');
            logoImage.should('be.visible');
        });

        //Check for navigation and links //
        cy.get('.topHeader').within(() => {
            const navLinks = cy.get('nav.topHeader__navigation');
            navLinks.should('be.visible');
        });
        cy.get('a[href*="#/übermich"]').should('be.visible'),
            cy.get('a[href*="#/beratung"]').should('be.visible'),
            cy.get('a[href*="#/"]').should('be.visible'),
            cy.get('a[href*="#/service"]').should('be.visible'),
            cy.get('a[href*="#/kontakt"]').should('be.visible');

        //Check content area for information boxes with text and images//
        cy.get('.contentRow').within(() => {
            const contentHeadline = cy.get('p.contentHeadline');
            contentHeadline
                .contains('Herzlich Willkommen')
                .should('be.visible');
        });
        cy.get('.contentRow').within(() => {
            const contentBox1 = cy.get('div.contentCard').first();
            contentBox1
                .contains(
                    'Die Entscheidung zum Kauf oder Bau einer Immobilie gehört zu den wichtigsten Entscheidungen im Leben. Dabei sollte Ihr Anspruch an die Finanzierung entsprechend hoch sein.',
                )
                .should('be.visible');
        });
        cy.get('div.contentRow').within(() => {
            const contentBox2 = cy.get('div.contentCard').next();
            contentBox2
                .contains('Ihr Partner für unabhängige Immobilien­finanzierung')
                .should('be.visible');
        });
        cy.get('div.contentRow').within(() => {
            const horttPortrait = cy.get('img.home__image');
            horttPortrait
                .should('be.visible')
                .should('have.attr', 'src', 'img/hortt_rhein.jpg')
                .should('have.attr', 'alt', 'hortt_rhein');
        });

        // Check first contentcard for buttons and modals //
        cy.get('.contentRow').within(() => {
            const btnZinssuche = cy.get('div.contentCard').first();
            btnZinssuche.contains('Zinssuche').click().should('be.visible');
        });
        cy.get('.modal').within(() => {
            const Zinsmodal = cy.get('div.modal__body');
            Zinsmodal;
            cy.get('.modal__modalClose').click();
        });
        cy.get('.contentRow').within(() => {
            const btnAntrag = cy.get('div.contentCard').first();
            btnAntrag;
            cy.contains('Antrag').click().should('be.visible');
        });
        cy.get('.modal').within(() => {
            const Antragmodal = cy.get('div.modal__body');
            Antragmodal;
            cy.get('.modal__modalClose').click();
        });

        // Check second contentcard for button and link //
        cy.get('.contentRow').within(() => {
            const btnKennenlernen = cy.get('div.contentCard').next();
            btnKennenlernen;
            cy.contains('Lernen sie mich kennen').should('be.visible').click();
            cy.url().should(
                'contain',
                'https://cy-borg.net/hortt-dev/#/%C3%BCbermich',
            );
            cy.go('back');
        });

        // Check second contentcard for h1 and h2 headlines //
        cy.get('.contentRow').within(() => {
            const btnKennenlernen = cy.get('div.contentCard').next();
            btnKennenlernen;
            cy.get('h1').should('contain', 'Manfred Hortt');
            cy.get('h2').should('contain', 'Bankfachwirt'); // find solution for checking the whole text with br between //
        });
    });
});
