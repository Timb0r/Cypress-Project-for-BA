import { componentSelectors, modSelectors } from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check consulting page and content', () => {
    beforeEach(() => {
        cy.visit(routes.consulting);
    });
    context('check contentRow intro', () => {
        it('check amount of paragraphs in cardText', () => {
            cy.get(componentSelectors.cardTextArea).within(() => {
                cy.get('p').should('have.length', 3);
            });
        });
        it('check image', () => {
            cy.get(componentSelectors.contentRow + modSelectors.intro).within(
                () => {
                    cy.get('img')
                        .should('be.visible')
                        .should('have.attr', 'src', 'img/consultation.jpg')
                        .should('have.attr', 'alt', 'hortt_consultation');
                },
            );
        });
    });
    context('check contentRow benefits', () => {
        it('check headline and benefit list item amount', () => {
            cy.get(
                componentSelectors.contentRow + modSelectors.benefits,
            ).within(() => {
                cy.get(componentSelectors.headline + modSelectors.h1).should(
                    'contain',
                    'Meine Leistungen für Sie:',
                );
                cy.get(componentSelectors.benefitList)
                    .children()
                    .should('have.length', 3);
            });
        });
    });
    context('check contentRow contactOptions', () => {
        it('check headline', () => {
            cy.get(
                componentSelectors.contentRow + modSelectors.contactOptions,
            ).within(() => {
                cy.get(componentSelectors.headline + modSelectors.h2).should(
                    'contain',
                    'Sie entscheiden, wie Sie beraten werden möchten!',
                );
            });
        });
        it('check contact options', () => {
            cy.get(
                componentSelectors.contentRow + modSelectors.contactOptions,
            ).within(() => {
                cy.get(componentSelectors.contentCard).each((card) => {
                    cy.get(card).within(() => {
                        cy.get('svg').should('be.visible');
                        cy.get('p').should('be.visible');
                        cy.get('a,button').should('be.visible');
                    });
                });
            });
        });
    });
});
