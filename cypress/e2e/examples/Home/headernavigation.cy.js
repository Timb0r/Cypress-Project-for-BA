import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inHeader', (callback) => {
    cy.get('header').within(callback);
});

describe('navigation area and linkgoals', () => {
    beforeEach(() => {
        cy.visit('https://cy-borg.net/hortt-dev/');
    });
    context('navigation area and linkgoals', () => {
        it('check navlinks', () => {
            cy.inHeader(() => {
                const navLinks = cy.get('nav.topHeader__navigation');
                navLinks.should('be.visible');
            });
        });
        it('check linkgoals', () => {
            cy.inHeader(() => {
                cy.get('a[href*="#/übermich"]').should('be.visible');
                cy.get('a[href*="#/beratung"]').should('be.visible');
                cy.get('a[href*="#/"]').should('be.visible');
                cy.get('a[href*="#/service"]').should('be.visible');
                cy.get('a[href*="#/kontakt"]').should('be.visible');
            });
        });
    });
});
