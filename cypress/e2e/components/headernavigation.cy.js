import selectors, { componentSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('check navigation area, navigation items and link goals', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('navigation area and linkgoals', () => {
        it('check navigation area and navigation items', () => {
            cy.get(componentSelectors.navigation)
                .should('be.visible')
                .within(() => {
                    cy.get('ul')
                        .children()
                        .should('have.length', 5)
                        .and('be.visible');
                });
        });
        it('check linkgoals', () => {
            cy.get(componentSelectors.navigationItem).each((item) => {
                cy.request(item.prop('href'));
            });
        });
    });
});
