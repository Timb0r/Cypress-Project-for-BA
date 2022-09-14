import { routes } from '../constants/url';

const withinHead = (callback) => {
    cy.get('head').within(callback);
};

describe('Check favicon and website title in browser tab', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    it('check favicon', () => {
        withinHead(() => {
            cy.get('link').first().should('have.attr', 'href', 'favicon.ico');
        });
    });
    it('check metatitle', () => {
        withinHead(() => {
            cy.get('title').should(
                'contain',
                'Manfred Hortt - Bankfachwirt & Baufinanzierung',
            );
        });
    });
});
