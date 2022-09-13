import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

const withinAboutMe = (callback) => {
    cy.get(componentSelectors.aboutMe).within(callback);
};

describe('Check aboutme page and content', () => {
    beforeEach(() => {
        cy.visit(routes.aboutMe);
    });
    it('check title', () => {
        withinAboutMe(() => {
            cy.get(componentSelectors.headline + modSelectors.h1).should(
                'contain',
                'Lernen Sie mich kennen',
            );
        });
    });
    it('check name headline and subheadline', () => {
        withinAboutMe(() => {
            cy.get(componentSelectors.headline + modSelectors.h2).should(
                'contain',
                'Manfred Hortt',
            );
            cy.get(componentSelectors.subHeadline).should(
                'contain',
                'Ihr Berater in Köln und Umgebung',
            );
        });
    });
    it('check image', () => {
        withinAboutMe(() => {
            cy.get('img')
                .should('be.visible')
                .should('have.attr', 'src', 'img/aboutMe.jpg')
                .should('have.attr', 'alt', 'hortt_aboutMe');
        });
    });
    it('check "Eckdaten" section', () => {
        withinAboutMe(() => {
            cy.contains('Ein paar Eckdaten zu mir:').should('be.visible');
            cy.get('ul').children().should('have.length', 6);
        });
    });
});
