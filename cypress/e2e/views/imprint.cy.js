import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check imprint page and content', () => {
    beforeEach(() => {
        cy.visit(routes.imprint);
    });
    it('check headline', () => {
        cy.get(componentSelectors.headline + modSelectors.h1).should(
            'contain',
            'Impressum',
        );
    });
    context('check contentcard and content', () => {
        it('check h2 headlines', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get(componentSelectors.headline + modSelectors.h2).should(
                    'have.length',
                    2,
                );
            });
        });
        it('check h3 headlines', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get('h3').should('be.visible').should('have.length', 8);
            });
        });
        it('check amount of text sections', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get('p').should('have.length', 26);
            });
        });
    });
});
