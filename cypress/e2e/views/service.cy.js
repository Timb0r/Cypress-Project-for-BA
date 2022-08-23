import selectors from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check service page and content', () => {
    beforeEach(() => {
        cy.visit(routes.service);
    });
    it('check headline', () => {
        cy.get(selectors.headline + selectors.h1).should('contain', 'Service');
    });
    context('check contentrow', () => {
        it('check contentcard', () => {
            cy.get(selectors.contentCard).within(() => {
                cy.get(selectors.interestCalculatorButton).should(
                    'contain',
                    'Zinssuche',
                );
                cy.get(selectors.mortgageRequestButton).should(
                    'contain',
                    'Antrag',
                );
                cy.get('p').should('have.length', 5);
            });
        });
    });
});
