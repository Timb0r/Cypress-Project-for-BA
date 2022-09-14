import { componentSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

const withinBanner = (callback) => {
    cy.get(componentSelectors.cookieBanner).within(callback);
};

describe('cookie control tests', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    context('test local storage', () => {
        it('should be null first time page is visited', () => {
            cy.getLocalStorage('cookie:accepted').should('equal', null);
        });

        it('should be true after clicking cookies button', () => {
            withinBanner(() => {
                cy.get(componentSelectors.button).click();
                cy.getLocalStorage('cookie:accepted').should('equal', 'true');
            });
        });
    });
    context('test cookie banner handling', () => {
        it('should be hidden after button click', () => {
            withinBanner(() => {
                cy.get(componentSelectors.button)
                    .should('be.visible')
                    .click()
                    .should('not.be.visible');
            });
        });
    });
});
