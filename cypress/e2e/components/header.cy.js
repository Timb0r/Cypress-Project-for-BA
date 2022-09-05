import { componentSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

const withinTopHeader = (callback) => {
    cy.get(componentSelectors.topHeader).within(callback);
};

describe('header tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit(routes.home);
    });
    context('topheader links', () => {
        it('check adress link', () => {
            withinTopHeader(() => {
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
            withinTopHeader(() => {
                cy.get(componentSelectors.link)
                    .next()
                    .should('be.visible')
                    .should('have.attr', 'href', 'tel:+4917699392965')
                    .should('have.attr', 'target', '_blank');
            });
        });
        it('check mailto', () => {
            withinTopHeader(() => {
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
    context('topheader images', () => {
        it('check image', () => {
            withinTopHeader(() => {
                cy.get('img')
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/header.jpg');
            });
        });
        it('check logo', () => {
            withinTopHeader(() => {
                cy.get(componentSelectors.logoArea)
                    .should('be.visible')
                    .within(() => {
                        cy.get('svg').should('be.visible');
                        cy.get('p').should('have.length', 2);
                    });
            });
        });
        it('check logo sizes', () => {
            withinTopHeader(() => {
                // image has to be as big as the fullscreen width withou a padding
                cy.get('img')
                    .invoke('width')
                    .should('be.lessThan', 1860) // substract logo, body padding and scrollbar
                    .should('be.greaterThan', 1800); // scrollbar width can differ between devices
                cy.get(componentSelectors.logoArea)
                    .should('have.css', 'position', 'absolute')
                    .invoke('css', 'right')
                    .then((str) => parseInt(str))
                    .should('be.gt', 0);
            });
        });
        it('check logo sizes in smaller breakpoint', () => {
            cy.viewport(1200, 768);
            cy.wait(1000); // wait for image transition
            withinTopHeader(() => {
                cy.get('img')
                    .invoke('width')
                    .should('be.lessThan', 840) // substract logo, body padding and scrollbar
                    .should('be.greaterThan', 820); // scrollbar width can differ between devices
                cy.get(componentSelectors.logoArea).should(
                    'have.css',
                    'right',
                    '0px',
                );
            });
        });
        it('check image transition when switching breakpoint', () => {
            withinTopHeader(() => {
                cy.viewport(1200, 768);
                cy.get('img')
                    .invoke('width')
                    .should('be.lessThan', 1100) // substract logo, body padding and scrollbar
                    .should('be.greaterThan', 840); // depending how fast cypress runs on device
                cy.wait(1000); // wait for image transition
                cy.get('img')
                    .invoke('width')
                    .should('be.lessThan', 840) // substract logo, body padding and scrollbar
                    .should('be.greaterThan', 820); // scrollbar width can differ between devices
            });
        });
    });
});
