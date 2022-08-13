import selectors from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check privacyPolicy page and content', () => {
    beforeEach(() => {
        cy.visit(routes.privacyPolicy);
    });
    it('check headline', () => {
        cy.get(selectors.headline + selectors.h1).should(
            'contain',
            'Datenschutzerklärung',
        );
    });
    context('check contentcard and content', () => {
        it('check h2 headlines', () => {
            cy.get(selectors.contentCard).within(() => {
                cy.get(selectors.headline + selectors.h2).should(
                    'have.length',
                    5,
                );
            });
        });
        it('check h3 headlines', () => {
            cy.get(selectors.contentCard).within(() => {
                cy.get('h3').should('be.visible').should('have.length', 20);
            });
        });
        it('check amount of text sections', () => {
            cy.get(selectors.contentCard).within(() => {
                cy.get('p').should('have.length', 55);
            });
        });
    });
});
