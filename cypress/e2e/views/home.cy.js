import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inContent', (callback) => {
    cy.get('main').within(callback);
});

describe('Check homepage and content', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    it('check headline', () => {
        cy.get(selectors.home).should('contain', 'Herzlich Willkommen');
    });
    context('check contentrows', () => {
        it('check first contentcard', () => {
            cy.get(selectors.contentCard).within(($contentCard) => {
                cy.get(selectors.button).should('contain', 'Zinssuche');
                cy.get(selectors.button).should('contain', 'Antrag');
            });
        });
        it('check second contentcard', () => {
            cy.get(selectors.contentCard).within(($contentCard) => {
                cy.get('p').should(
                    'contain',
                    'Ihr Partner für unabhängige Immobilien­finanzierung',
                );
                cy.get('img')
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/hortt_rhein.jpg')
                    .should('have.attr', 'alt', 'hortt_rhein');
                cy.get(selectors.headline + selectors.h1).should(
                    'contain',
                    'Manfred Hortt',
                );
                cy.get(selectors.headline + selectors.h2).should(
                    'contain',
                    'Bankfachwirt',
                ); // find solution for checking the whole text with br between (Bankfachwirt br Baufinanzierung) //
                cy.get(selectors.introHints).should('contain', 'Kompetent'); // find solution for checking the whole text with br between
                cy.get(selectors.button).should(
                    'contain',
                    'Lernen sie mich kennen',
                );
            });
        });
    });
});
