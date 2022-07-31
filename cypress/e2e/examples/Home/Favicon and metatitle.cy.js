Cypress.Commands.add('inHead', (callback) => {
    cy.get('head').within(callback);
});

describe('Check favicon and website title in browser tab', () => {
    beforeEach(() => {
        cy.visit('https://cy-borg.net/hortt-dev/');
        cy.wait(200);
    });
    context('check favicon and title', () => {
        //Check browsertab for correct favicon and title
        it('check favicon', () => {
            cy.inHead(() => {
                cy.contains('head')
                    .should('have.attr', 'href', 'favicon.ico')
                    .and('be.visible');
            });
        });
    });
});
