import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check homepage and content', () => {
    beforeEach(() => {
        cy.visit(routes.home);
    });
    it('check headline', () => {
        cy.get(componentSelectors.home).should(
            'contain',
            'Herzlich Willkommen',
        );
    });
    context('check contentrows', () => {
        it('check first contentcard', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get(
                    componentSelectors.button + modSelectors.interestCalculator,
                ).should('contain', 'Zinssuche');
                cy.get(
                    componentSelectors.button + modSelectors.mortgageRequest,
                ).should('contain', 'Antrag');
                cy.get('p').should('have.length', 7);
            });
        });
        it('check second contentcard', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get('p').should(
                    'contain',
                    'Ihr Partner für unabhängige Immobilien­finanzierung',
                );
                cy.get('img')
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/hortt_rhein.jpg')
                    .should('have.attr', 'alt', 'hortt_rhein');
                cy.get(componentSelectors.headline + modSelectors.h1).should(
                    'contain',
                    'Manfred Hortt',
                );
                cy.get(componentSelectors.headline + modSelectors.h2)
                    .should('contain', 'Bankfachwirt')
                    .should('contain', 'Baufinanzierung');
                cy.get(componentSelectors.introHints)
                    .should('contain', 'Kompetent')
                    .should('contain', 'Flexibel')
                    .should('contain', 'Persönlich')
                    .should('contain', 'Unabhängig');
                cy.get(componentSelectors.button + modSelectors.getToKnowMe)
                    .should('contain', 'Lernen sie mich kennen')
                    .click();
                cy.on('url:changed', (newUrl) => {
                    expect(newUrl).to.contain('uebermich');
                });
            });
        });
        it('check Zinssuche modal', () => {
            cy.testModal(modSelectors.interestCalculator, 'Zinssuche');
        });
        it('check Antrag modal', () => {
            cy.testModal(modSelectors.mortgageRequest, 'Antrag');
        });
    });
});
