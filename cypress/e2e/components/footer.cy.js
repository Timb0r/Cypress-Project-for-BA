import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('check footer section', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('check footer logo', () => {
        it('check svg', () => {
            cy.get(componentSelectors.bottomFooter).within(() => {
                cy.get('svg').should('be.visible');
            });
        });
        it('check amount of footer links', () => {
            cy.get(componentSelectors.bottomFooter).within(() => {
                cy.get(componentSelectors.link)
                    .should('be.visible')
                    .should('have.length', 4);
                cy.get(componentSelectors.link + modSelectors.banner)
                    .should('be.visible')
                    .should('have.length', 2);
            });
        });
        it('check telephone number', () => {
            cy.get(componentSelectors.link + modSelectors.banner)
                .first()
                .should('be.visible')
                .should('have.attr', 'target', '_blank')
                .invoke('attr', 'href')
                .should('contain', 'tel:');
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
    });
});
