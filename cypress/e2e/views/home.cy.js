import selectors from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check homepage and content', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    it('check headline', () => {
        cy.get(selectors.home).should('contain', 'Herzlich Willkommen');
    });
    context('check contentrows', () => {
        it('check first contentcard', () => {
            cy.get(selectors.contentCard).within(() => {
                cy.get(selectors.interestCalculatorButton).should(
                    'contain',
                    'Zinssuche',
                );
                cy.get(selectors.mortgageRequestButton).should(
                    'contain',
                    'Antrag',
                );
                cy.get('p').should('have.length', 7);
            });
        });
        it('check second contentcard', () => {
            cy.get(selectors.contentCard).within(() => {
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
                cy.get(selectors.getToKnowMeButton).should(
                    'contain',
                    'Lernen sie mich kennen',
                );
            });
        });
    });
});
