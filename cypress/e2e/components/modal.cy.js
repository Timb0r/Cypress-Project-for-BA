import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check homepage and content', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });

    it('check Zins-modal', () => {
        cy.get(componentSelectors.contentCard).within(() => {
            cy.get(
                componentSelectors.button + modSelectors.interestCalculator,
            ).click();
            cy.wait(1000);
            cy.get('.modal__body').should('be.visible');
            cy.get(componentSelectors.modal).should('be.visible');
            cy.get(componentSelectors.modal + ' iframe'); // optional: check if it is the right modal
            cy.get(componentSelectors.button + modSelectors.close).click();
        });
    });
    it('check Antrag-modal', () => {
        cy.get(componentSelectors.contentCard).within(() => {
            cy.get(
                componentSelectors.button + modSelectors.mortgageRequest,
            ).click();
        });
    });
});
