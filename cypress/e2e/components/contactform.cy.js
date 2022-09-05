import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

const fillContactForm = (values) => {
    cy.get(componentSelectors.contact + ' form').within(() => {
        if (values.organization) {
            cy.get(
                componentSelectors.inputField +
                    modSelectors.organization +
                    ' input',
            ).type(values.organization);
        }
        if (values.salutation) {
            cy.get(
                componentSelectors.selectField +
                    modSelectors.salutation +
                    ' select',
            ).select(values.salutation);
        }
        if (values.name) {
            cy.get(
                componentSelectors.inputField + modSelectors.name + ' input',
            ).type(values.name);
        }
        if (values.phone) {
            cy.get(
                componentSelectors.inputField + modSelectors.phone + ' input',
            ).type(values.phone);
        }
        if (values.email) {
            cy.get(
                componentSelectors.inputField + modSelectors.email + ' input',
            ).type(values.email);
        }
        if (values.textArea) {
            cy.get(componentSelectors.textArea).type(values.textArea);
        }
        if (values.checkbox) {
            cy.get(componentSelectors.checkbox + ' input').click({
                force: true,
            });
        }
    });
};

describe('Check contact form', () => {
    beforeEach(() => {
        cy.visit(routes.contact);
    });
    it('check button enabled if all fields valid and 10sek passed', () => {
        const values = {
            organization: 'Test Automation GmbH',
            salutation: 'Herr',
            name: 'Testy Mc Testface',
            phone: '01731337733',
            email: 'test@testmail.de',
            textArea: 'This is a test message for the contact form',
            checkbox: true,
        };
        fillContactForm(values);
        cy.get(componentSelectors.button + modSelectors.send).should(
            'be.disabled',
        );
        cy.wait(10000); // wait 10 seconds for bot protection
        cy.get(componentSelectors.button + modSelectors.send).should(
            'not.be.disabled',
        );
    });
    it('check button disabled if honeypot1 is filled', () => {
        const values = {
            organization: 'Test Automation GmbH',
            salutation: 'Herr',
            name: 'Testy Mc Testface',
            phone: '01731337733',
            email: 'test@testmail.de',
            textArea: 'This is a test message for the contact form',
            checkbox: true,
        };
        fillContactForm(values);
        cy.get(
            componentSelectors.inputField + modSelectors.hpot1 + ' input',
        ).type('street', { force: true });
        cy.wait(10000); // wait 10 seconds for bot protection
        cy.get(componentSelectors.button + modSelectors.send).should(
            'be.disabled',
        );
    });
    it('check button disabled if salutation is not provided', () => {
        const values = {
            organization: 'Test Automation GmbH',
            name: 'Testy Mc Testface',
            phone: '01731337733',
            email: 'test@testmail.de',
            textArea: 'This is a test message for the contact form',
            checkbox: true,
        };
        fillContactForm(values);
        cy.wait(10000); // wait 10 seconds for bot protection
        cy.get(componentSelectors.button + modSelectors.send).should(
            'be.disabled',
        );
    });
    it('check button disabled if name is not provided', () => {
        const values = {
            organization: 'Test Automation GmbH',
            salutation: 'Herr',
            phone: '01731337733',
            email: 'test@testmail.de',
            textArea: 'This is a test message for the contact form',
            checkbox: true,
        };
        fillContactForm(values);
        cy.wait(10000); // wait 10 seconds for bot protection
        cy.get(componentSelectors.button + modSelectors.send).should(
            'be.disabled',
        );
    });
    it('check button disabled if email is not provided', () => {
        const values = {
            organization: 'Test Automation GmbH',
            salutation: 'Herr',
            name: 'Testy Mc Testface',
            phone: '01731337733',
            textArea: 'This is a test message for the contact form',
            checkbox: true,
        };
        fillContactForm(values);
        cy.wait(10000); // wait 10 seconds for bot protection
        cy.get(componentSelectors.button + modSelectors.send).should(
            'be.disabled',
        );
    });
    it('check button disabled if textArea is not provided', () => {
        const values = {
            organization: 'Test Automation GmbH',
            salutation: 'Herr',
            name: 'Testy Mc Testface',
            phone: '01731337733',
            email: 'test@testmail.de',
            checkbox: true,
        };
        fillContactForm(values);
        cy.wait(10000); // wait 10 seconds for bot protection
        cy.get(componentSelectors.button + modSelectors.send).should(
            'be.disabled',
        );
    });
    it('check button disabled if checkbox is not provided', () => {
        const values = {
            organization: 'Test Automation GmbH',
            salutation: 'Herr',
            name: 'Testy Mc Testface',
            phone: '01731337733',
            email: 'test@testmail.de',
            textArea: 'This is a test message for the contact form',
        };
        fillContactForm(values);
        cy.wait(10000); // wait 10 seconds for bot protection
        cy.get(componentSelectors.button + modSelectors.send).should(
            'be.disabled',
        );
    });
});
