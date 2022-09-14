import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check service page and content', () => {
    beforeEach(() => {
        cy.visit(routes.service);
    });
    it('check headline', () => {
        cy.get(componentSelectors.headline + modSelectors.h1).should(
            'contain',
            'Service',
        );
    });
    context('check contentrow', () => {
        it('check button texts', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get(
                    componentSelectors.button + modSelectors.interestCalculator,
                ).should('contain', 'Zinssuche');
                cy.get(
                    componentSelectors.button + modSelectors.mortgageRequest,
                ).should('contain', 'Antrag');
            });
        });
        it('check amount of paragraphs', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get('p').should('have.length', 5);
            });
        });
        it('check Zinssuche modal', () => {
            cy.testModal(modSelectors.interestCalculator, 'Zinssuche');
        });
        it('check Antrag modal', () => {
            cy.testModal(modSelectors.mortgageRequest, 'Antrag');
        });
    });
});
