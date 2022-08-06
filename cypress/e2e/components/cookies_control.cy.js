import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inBanner', (callback) => {
    cy.get(selectors.cookieBanner).within(callback);
});
describe('cookie control tests', () => {
    context('test local storage', () => {
        beforeEach(() => {
            cy.visit(routes.home);
        });

        it('should be null first time page is visited', () => {
            cy.getLocalStorage('cookie:accepted').should('equal', null);
        });

        it('should be true after clicking cookies button', () => {
            cy.get('.cookieBanner > .btn').click();
            cy.getLocalStorage('cookie:accepted').should('equal', 'true');
        });
    });
    context('test cookie banner handling', () => {
        it('should be hidden after button click', () => {
            cy.visit(routes.home);
            cy.inBanner(() => {
                const cookieButton = cy.get(selectors.cookiebutton);
                cookieButton.should('be.visible');
                cookieButton.click();
                cookieButton.should('not.be.visible');
            });
        });
    });
});
