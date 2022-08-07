import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inHeader', (callback) => {
    cy.get('header').within(callback);
});

describe('check headerimage and content', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit(routes.home);
    });
    context('check topheader links', () => {
        it('check adress link', () => {
            cy.inHeader(() => {
                const adressLink = cy.get(selectors.link);
                adressLink
                    .should('be.visible')
                    .should(
                        'have.attr',
                        'href',
                        'https://goo.gl/maps/xbWR9XYkN4PDnfGh8', // URL hat sich geändert und deshalb failed. daher besser lösen single point of truth?
                    )
                    .should('have.attr', 'target', '_blank');
            });
        });
        it('check phone number', () => {
            cy.inHeader(() => {
                const phoneNumber = cy.get('a.topHeader__topLink').next();
                phoneNumber
                    .should('be.visible')
                    .should('have.attr', 'href', 'tel:+4917699392965')
                    .should('have.attr', 'target', '_blank');
            });
        });
        it('check mailto', () => {
            cy.inHeader(() => {
                const sendEmail = cy.get('a.topHeader__topLink').last();
                sendEmail
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
            cy.inHeader(() => {
                const headerImage = cy.get('img.topHeader__image');
                headerImage
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/header.jpg');
            });
        });
        it('check header logo', () => {
            cy.inHeader(() => {
                const logoArea = cy.get('div.topHeader__logoArea');
                logoArea.should('be.visible');
                logoArea.within(() => {
                    cy.get('svg');
                    cy.get('p').should('have.length', 2);
                });
            });
        });
        it('check header and logo sizes', () => {
            cy.inHeader(() => {
                const headerImage = cy.get('img.topHeader__image');
                headerImage.invoke('width').should('be.lessThan', 1920);
            });
        });
    });
});
