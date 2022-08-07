import selectors from '../constants/selectors';
import { routes } from '../constants/url';

Cypress.Commands.add('inContent', (callback) => {
    cy.get('main').within(callback);
    // how to efficiently use selectors.contentcard and contentrow in context to check all the contents without failing?
});

describe('Check aboutme page and content', () => {
    beforeEach(() => {
        cy.visit(routes.aboutMe);
    });
    it('check title', () => {
        cy.inContent(() => {
            // should use selectors.headline to check outer element headline AND h1 but doesn´t work yet
            cy.get(selectors.h1).should(
                'contain',
                'Lernen Sie mich kennen',
                // be.visible deleted in all checks becaus checking text in source code and visibility in viewport is the same?
            );
        });
    });
    context('check content box elements', () => {
        it('check name headline and subheadline', () => {
            cy.inContent(() => {
                cy.get(selectors.h2).should('contain', 'Manfred Hortt');
                cy.get(selectors.subHeadline).should(
                    'contain',
                    'Ihr Berater in Köln und Umgebung',
                );
            });
        });
        it('check image', () => {
            cy.inContent(() => {
                cy.get('img.aboutMe__image') // no data component
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/aboutMe.jpg')
                    .should('have.attr', 'alt', 'hortt_aboutMe');
            });
        });
        it('check "Eckdaten" section', () => {
            cy.inContent(() => {
                cy.contains('Ein paar Eckdaten zu mir:').should('be.visible');
                cy.get('ul.aboutMe__basicInfoList')
                    .children()
                    .should('have.length', 6);
            });
        });
    });
});
