import selectors, {
    componentSelectors,
    modSelectors,
} from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check contact form', () => {
    beforeEach(() => {
        cy.visit(routes.contact);
    });
    it('check contact form inputfields', () => {
        cy.get(componentSelectors.contact + ' form').within(() => {
            cy.get(
                componentSelectors.inputField + modSelectors.organization,
            ).type('Test Automation GmbH');
            /*  cy.get(
                        componentSelectors.selectField +
                            modSelectors.salutation,
                    )
                        .select('Herr')
                        .should('have.value', 'Herr');*/
            cy.get(componentSelectors.inputField + modSelectors.name).type(
                'Testy Mc Testface',
            );
            cy.get('div').then(($elements) => {
                cy.wrap($elements[$elements.length - 5]).type('01731337733');
            });
            cy.get(componentSelectors.inputField + modSelectors.email).type(
                'test@testmail',
            );
            cy.get(componentSelectors.textArea).type(
                'This is a test message for the contact form',
            );
            cy.get(componentSelectors.checkbox)
                .should('not.be.checked')
                .click(); // validate checkbox after click
            // cy.get(componentSelectors.checkbox).should('be.checked');
            //cy.get('checkbox-uid-39').should('be.visible'); //cypress thinks checkbox is still unchecked
            cy.get(componentSelectors.button + modSelectors.send).click(); //cypress thinks button is still disabled
        });
    });
});
// possible it-cases: test sending without mandatory fields(required), test e-mail validation, disabled state of send-button
