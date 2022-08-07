import selectors from '../constants/selectors';
import { routes } from '../constants/url';

describe('check footer and content', () => {
    it('check URL, check footer and content', () => {
        cy.visit(routes.home);
        cy.get(selectors.bottomFooter); // overhaul test in useful test in feature branch from here
        cy.get('a')
            .contains('Impressum')
            .should('be.visible')
            .should('have.attr', 'href', '#/impressum');
    });
});
