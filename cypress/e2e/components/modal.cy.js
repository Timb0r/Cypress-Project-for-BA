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
            // iframe is clicked and opened but cant manage to grab it to go on
            cy.get('.modal__topBar');
            cy.get(componentSelectors.modal + modSelectors.interestCalculator); // optional: check if it is the right modal
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
