import { routes } from '../constants/url';

Cypress.Commands.add('inContent', (callback) => {
    cy.get('main').within(callback);
});

describe('Check contact page and content', () => {
    context('check contact content', () => {
        beforeEach(() => {
            cy.visit(routes.contact);
        });
        it('check headline', () => {
            cy.inContent(() => {
                cy.get('.contentRow');
                const contentHeadline = cy.get('p.contentHeadline');
                contentHeadline
                    .contains('Herzlich Willkommen')
                    .should('be.visible');
            });
        });
        it('check first contentrow', () => {
            cy.inContent(() => {
                cy.get('.contentRow');
                const contentBox1 = cy.get('div.contentCard').first();
                contentBox1
                    .contains(
                        'Die Entscheidung zum Kauf oder Bau einer Immobilie gehört zu den wichtigsten Entscheidungen im Leben. Dabei sollte Ihr Anspruch an die Finanzierung entsprechend hoch sein.',
                    )
                    .should('be.visible');
            });
        });
        it('check Zinssuche-button and modal', () => {
            cy.inContent(() => {
                cy.get('.contentRow');
                const btnZinssuche = cy.get('div.contentCard').first();
                btnZinssuche.contains('Zinssuche').click().should('be.visible');
                cy.get('.modal');
                const Zinsmodal = cy.get('div.modal__body');
                Zinsmodal;
                cy.get('.modal__modalClose').click();
            });
        });
        it('check Antrag-button and modal', () => {
            cy.inContent(() => {
                cy.get('.contentRow');
                const btnAntrag = cy.get('div.contentCard').first();
                btnAntrag;
                cy.contains('Antrag').click().should('be.visible');
                cy.get('.modal');
                const Antragmodal = cy.get('div.modal__body');
                Antragmodal;
                cy.get('.modal__modalClose').click();
            });
        });
        it('check second contentrow', () => {
            cy.inContent(() => {
                cy.get('div.contentRow');
                const contentBox2 = cy.get('div.contentCard').next();
                contentBox2
                    .contains(
                        'Ihr Partner für unabhängige Immobilien­finanzierung',
                    )
                    .should('be.visible');
                cy.get('div.contentRow');
                const portrait = cy.get('img.home__image');
                portrait
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/hortt_rhein.jpg')
                    .should('have.attr', 'alt', 'hortt_rhein');
            });
        });
        it('check second content card headline', () => {
            cy.inContent(() => {
                cy.get('.contentRow');
                const btnKennenlernen = cy.get('div.contentCard').next();
                btnKennenlernen;
                cy.contains('Lernen sie mich kennen')
                    .should('be.visible')
                    .click();
                cy.url().should(
                    'contain',
                    'https://cy-borg.net/hortt-dev/#/uebermich',
                );
                cy.go('back');
            });
        });
        it('check h1 and h2 of second contentcard', () => {
            cy.inContent(() => {
                cy.get('.contentRow');
                const btnKennenlernen = cy.get('div.contentCard').next();
                btnKennenlernen;
                cy.get('h1').should('contain', 'Manfred Hortt');
                cy.get('h2').should('contain', 'Bankfachwirt'); // find solution for checking the whole text with br between //
            });
        });
    });
});
