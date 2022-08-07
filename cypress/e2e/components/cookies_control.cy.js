import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inBanner', (callback) => {
    cy.get(selectors.cookieBanner).within(callback);
});
describe('cookie control tests', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('test local storage', () => {
        it('should be null first time page is visited', () => {
            const cookieAccept = cy.getLocalStorage('cookie:accepted');
            cookieAccept.should('equal', null);
        });

        it('should be true after clicking cookies button', () => {
            cy.inBanner(() => {
                cy.get(selectors.button).click();
                const cookieAccept = cy.getLocalStorage('cookie:accepted');
                cookieAccept.should('equal', 'true');
            });
        });
    });
    context('test cookie banner handling', () => {
        it('should be hidden after button click', () => {
            cy.inBanner(() => {
                const cookieButton = cy.get(selectors.button);
                cookieButton.should('be.visible');
                cookieButton.click();
                cookieButton.should('not.be.visible');
            });
        });
    });
});
