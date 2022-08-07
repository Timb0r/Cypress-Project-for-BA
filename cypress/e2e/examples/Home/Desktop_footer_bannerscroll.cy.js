import selectors from '../constants/selectors';
import { routes } from '../constants/url';
// delete test maybe
describe('Scrolls down to footer, clicks cookie banner, checks if impressum is visible', () => {
    it('.scrollIntoView() - scroll an element into view', () => {
        cy.visit(routes.home);
        // scroll the button into view, as if the user had scrolled
        cy.get('footer').scrollIntoView().should('be.visible');
    });
});
