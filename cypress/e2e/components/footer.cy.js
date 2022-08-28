import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('check footer section and banner', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('check footer logo', () => {
        it('check svg', () => {
            cy.get(componentSelectors.bottomFooter).within(() => {
                cy.get('svg').should('be.visible');
            });
        });
        it('check telephone number', () => {
            cy.get(componentSelectors.link + modSelectors.banner)
                .first()
                .should('be.visible')
                .should('have.attr', 'href', 'tel:+4917699392965')
                .and('have.attr', 'target', '_blank');
        });
        it('check mail address', () => {
            cy.get(componentSelectors.link + modSelectors.banner)
                .last()
                .should('be.visible')
                .should(
                    'have.attr',
                    'href',
                    'mailto:beratung@hortt-baufinanzierung.de',
                )
                .and('have.attr', 'target', '_blank');
        });
        it('check all footer links', () => {
            cy.get(componentSelectors.bottomFooter).within(() => {
                cy.get(componentSelectors.link)
                    .should('be.visible')
                    .should('have.length', 4);
            });
        });
    });
});
