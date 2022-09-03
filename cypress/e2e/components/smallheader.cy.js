import selectors, { componentSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('check headerimage and content', () => {
    beforeEach(() => {
        cy.viewport(1200, 768);
        cy.visit(routes.home);
    });
    context('check topheader links', () => {
        it('check adress link', () => {
            cy.get(componentSelectors.topHeader).within(() => {
                cy.get(componentSelectors.link)
                    .should('be.visible')
                    .should(
                        'have.attr',
                        'href',
                        'https://goo.gl/maps/xbWR9XYkN4PDnfGh8',
                    )
                    .should('have.attr', 'target', '_blank');
            });
        });
        it('check phone number', () => {
            cy.get(componentSelectors.topHeader).within(() => {
                cy.get(componentSelectors.link)
                    .next()
                    .should('be.visible')
                    .should('have.attr', 'href', 'tel:+4917699392965')
                    .should('have.attr', 'target', '_blank');
            });
        });
        it('check mailto', () => {
            cy.get(componentSelectors.topHeader).within(() => {
                cy.get(componentSelectors.link)
                    .last()
                    .should('be.visible')
                    .should(
                        'have.attr',
                        'href',
                        'mailto:beratung@hortt-baufinanzierung.de',
                    )
                    .should('have.attr', 'target', '_blank');
            });
        });
    });
    context('check topheader images', () => {
        it('check header image', () => {
            cy.get(componentSelectors.topHeader).within(() => {
                cy.get('img')

                    .should('be.visible')
                    .should('have.attr', 'src', 'img/header.jpg');
            });
        });
        it('check header logo', () => {
            cy.get(componentSelectors.topHeader).within(() => {
                cy.get(componentSelectors.logoArea)
                    .should('be.visible')
                    .within(() => {
                        cy.get('svg');
                        cy.get('p').should('have.length', 2);
                    });
            });
        });
        it('check header and logo sizes', () => {
            cy.get(componentSelectors.topHeader).within(() => {
                cy.get('img').invoke('width').should('be.lessThan', 1200);
                cy.get(componentSelectors.logoArea).should('have.css', 'right');
                //   .and('equal, 0'); last check doesnt work, tried different ways to check css

                // maybe possible to check alignment of img and logo alignment
                // or check transformation of headerimage and logo calc(100% - 300px)
            });
        });
    });
});
