import selectors from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check consulting page and content', () => {
    beforeEach(() => {
        cy.visit(routes.consulting);
    });
    context('check contentrow and contentcards', () => {
        it('check first contentcard', () => {
            cy.get(selectors.cardTextArea).within(() => {
                cy.get('p').should('have.length', 3);
            });
        });
        it('check image', () => {
            cy.get(selectors.contentCard).within(() => {
                cy.get('img')
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/consultation.jpg')
                    .should('have.attr', 'alt', 'hortt_consultation');
            });
        });
        it('check contentrow', () => {
            cy.get(selectors.contentRow).within(() => {
                cy.get(selectors.headline + selectors.h1).should(
                    'contain',
                    'Meine Leistungen für Sie:',
                );
                cy.get(selectors.benefitList)
                    .children()
                    .should('have.length', 3);
            });
        });
        it('check contact options', () => {
            cy.get(selectors.contactOptions).within(() => {
                cy.get(selectors.headline + selectors.h2).should(
                    'contain',
                    'Sie entscheiden, wie Sie beraten werden möchten!',
                );
                cy.get(selectors.contentCard).each((card) => {
                    cy.get(card).within(() => {
                        cy.get('svg').should('be.visible');
                        cy.get('p').should('be.visible');
                        cy.get(selectors.button).should('be.visible'); // doesn`t work because first is not a button
                    });
                });
            });
        });
    });
});
