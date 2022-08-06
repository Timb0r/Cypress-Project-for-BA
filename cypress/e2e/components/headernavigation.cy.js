import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inHeader', (callback) => {
    cy.get('header').within(callback);
});

describe('navigation area and navigation items', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('navigation area and linkgoals', () => {
        it('check navlinks', () => {
            cy.inHeader(() => {
                cy.get('nav').should('be.visible');
            });
        });
        it('check linkgoals', () => {
            cy.inHeader(() => {
                cy.get('a[href*="#/uebermich"]').should('be.visible'); // iterieren nicht einzeln getten
                cy.get('a[href*="#/beratung"]').should('be.visible');
                cy.get('a[href*="#/"]').should('be.visible');
                cy.get('a[href*="#/service"]').should('be.visible');
                cy.get('a[href*="#/kontakt"]').should('be.visible');
            });
        });
    });
});
