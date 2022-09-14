import 'cypress-localstorage-commands';
import { componentSelectors, modSelectors } from '../e2e/constants/selectors';

Cypress.Commands.add('testModal', (modSelector, headline) => {
    cy.get(componentSelectors.button + modSelector).click();
    cy.get(componentSelectors.modal + modSelector, { timeout: 1000 }).should(
        'be.visible',
    );
    cy.get(componentSelectors.modal + modSelector).contains(headline);
    cy.get(componentSelectors.button + modSelectors.close).click();
    cy.get(componentSelectors.modal + modSelector, { timeout: 1000 }).should(
        'not.exist',
    );
});
