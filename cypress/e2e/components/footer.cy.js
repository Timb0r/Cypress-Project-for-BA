import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

const withinFooter = (callback) => {
    cy.get(componentSelectors.bottomFooter).within(callback);
};

describe('check footer section', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('check footer logo', () => {
        it('check svg', () => {
            withinFooter(() => {
                cy.get('svg').should('be.visible');
            });
        });
        it('check amount of footer links', () => {
            withinFooter(() => {
                cy.get(componentSelectors.link)
                    .should('be.visible')
                    .should('have.length', 4);
                cy.get(componentSelectors.link + modSelectors.banner)
                    .should('be.visible')
                    .should('have.length', 2);
            });
        });
        it('check telephone number', () => {
            withinFooter(() => {
                cy.get(componentSelectors.link + modSelectors.banner)
                    .first()
                    .should('be.visible')
                    .should('have.attr', 'target', '_blank')
                    .invoke('attr', 'href')
                    .should('contain', 'tel:');
            });
        });
        it('check mail address', () => {
            withinFooter(() => {
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
});
