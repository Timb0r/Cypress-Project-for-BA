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
                    ' Sie entscheiden, wie Sie beraten werden möchten! ',
                );
                cy.get(selectors.contentCard).first(); // how to select multiple content cards with similar elements inside?
                cy.get('svg')
                    .first()
                    .should('be.visible')
                    .should('have.attr', 'viewBox', '0 0 576 576'); // why is it still matching all 3 svgs? solution with .first worked now but looks not right
                cy.get('p').first().should('contain', 'Telefonberatung');
                cy.get('a')
                    .first()
                    .should('have.attr', 'href', 'tel:+4917699392965');
                cy.get(selectors.contentCard).next(); // doesn´t work at all
                cy.get('svg')
                    .next()
                    .should('be.visible')
                    .should('have.attr', 'viewBox', '0 0 40 28');
                cy.get('p').next().should('contain', 'Videoberatung');
                cy.get(selectors.button)
                    .next()
                    .should('contain', 'Termin vereinbaren');
                cy.get(selectors.contentCard).last();
                cy.get('svg')
                    .last()
                    .should('be.visible')
                    .should('have.attr', 'viewBox', '0 0 488.4 488.4');
                cy.get('p').last().should('contain', 'Vor-Ort-Beratung');
                cy.get(selectors.button)
                    .last()
                    .should('contain', 'Termin vereinbaren');
            });
        });
    });
});
