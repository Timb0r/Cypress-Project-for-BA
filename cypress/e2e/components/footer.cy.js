import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('check footer and content', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('check contentcards and contents', () => {
        it('check svg', () => {
            cy.get(componentSelectors.bottomFooter).within(() => {
                cy.get('svg.bottomFooter__logo').should('be.visible');
            });
        });
        it('check telephone number', () => {
            // same problem selecting multiple elements of same type as in consulting-test
            cy.get(componentSelectors.link + modSelectors.banner)
                .first()
                .should('be.visible')
                .should('have.attr', 'href', 'tel:+4917699392965')
                .and('have.attr', 'target', '_blank');
        });
        it('check mail address', () => {
            cy.get(componentSelectors.link + modSelectors.banner)
                .should('be.visible')
                .should(
                    'have.attr',
                    'href',
                    'mailto:beratung@hortt-baufinanzierung.de',
                )
                .and('have.attr', 'target', '_blank');
        });
        it('check footer link Impressum', () => {
            cy.get(componentSelectors.link)
                .should('be.visible')
                .should('have.attr', 'href', '#/impressum')
                .and('have.attr', 'target', '_blank');
        });
        it('check footer link Datenschutz', () => {
            cy.get(componentSelectors.link)
                .should('be.visible')
                .should('have.attr', 'href', '#/impressum')
                .and('have.attr', 'target', '_blank');
        });
    });
});
