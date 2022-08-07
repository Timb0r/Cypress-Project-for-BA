import selectors from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check aboutme page and content', () => {
    beforeEach(() => {
        cy.visit(routes.aboutMe);
    });
    it('check title', () => {
        cy.get(selectors.headline + selectors.h1).should(
            'contain',
            'Lernen Sie mich kennen',
        );
    });
    context('check content box elements', () => {
        it('check name headline and subheadline', () => {
            cy.get(selectors.contentCard).within(($contentCard) => {
                cy.get(selectors.headline + selectors.h2).should(
                    'contain',
                    'Manfred Hortt',
                );
                cy.get(selectors.subHeadline).should(
                    'contain',
                    'Ihr Berater in Köln und Umgebung',
                );
            });
        });
    });
    it('check image', () => {
        cy.get(selectors.contentCard).within(($contentCard) => {
            cy.get('img')
                .should('be.visible')
                .should('have.attr', 'src', 'img/aboutMe.jpg')
                .should('have.attr', 'alt', 'hortt_aboutMe');
        });
    });
    it('check "Eckdaten" section', () => {
        cy.get(selectors.contentCard).within(($contentCard) => {
            cy.contains('Ein paar Eckdaten zu mir:').should('be.visible');
            cy.get('ul.aboutMe__basicInfoList')
                .children()
                .should('have.length', 6);
        });
    });
});
