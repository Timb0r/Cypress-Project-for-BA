import selectors, {
    componentSelectors,
    modSelectors,
} from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check consulting page and content', () => {
    beforeEach(() => {
        cy.visit(routes.consulting);
    });
    context('check contentrow and contentcards', () => {
        it('check first contentcard', () => {
            cy.get(componentSelectors.cardTextArea).within(() => {
                cy.get('p').should('have.length', 3);
            });
        });
        it('check image', () => {
            cy.get(componentSelectors.contentCard).within(() => {
                cy.get('img')
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/consultation.jpg')
                    .should('have.attr', 'alt', 'hortt_consultation');
            });
        });
        it('check contentrow', () => {
            cy.get(componentSelectors.contentRow).within(() => {
                cy.get(componentSelectors.headline + modSelectors.h1).should(
                    'contain',
                    'Meine Leistungen für Sie:',
                );
                cy.get(componentSelectors.benefitList)
                    .children()
                    .should('have.length', 3);
            });
        });
        it('check contact options', () => {
            cy.get(modSelectors.contactOptions).within(() => {
                cy.get(componentSelectors.headline + modSelectors.h2).should(
                    'contain',
                    'Sie entscheiden, wie Sie beraten werden möchten!',
                );
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
