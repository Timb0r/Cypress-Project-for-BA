import { routes } from '../constants/url';

Cypress.Commands.add('inHead', (callback) => {
    cy.get('head').within(callback);
});

describe('Check favicon and website title in browser tab', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    it('check favicon', () => {
        cy.inHead(() => {
            const link = cy.get('link').first();
            link.should('have.attr', 'href', 'favicon.ico');
        });
    });
    it('check metatitle', () => {
        cy.inHead(() => {
            cy.get('title').should(
                'contain',
                'Manfred Hortt - Bankfachwirt & Baufinanzierung',
            );
        });
    });
});
