import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inHead', (callback) => {
    cy.get('head').within(callback);
});

describe('Check favicon and website title in browser tab', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    //Check browsertab for correct favicon and title
    it('check favicon', () => {
        cy.inHead(() => {
            cy.contains('head')
                .should('have.attr', 'href', 'favicon.ico')
                .and('be.visible');
        });
    });
});
