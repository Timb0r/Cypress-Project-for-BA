import selectors, {
    componentSelectors,
    modSelectors,
} from '../constants/selectors';
import { routes } from '../constants/url';

describe('Check contact page and content', () => {
    beforeEach(() => {
        cy.visit(routes.contact);
    });
    it('check headline', () => {
        cy.get(componentSelectors.headline + modSelectors.h1).should(
            'contain',
            'Kontakt',
        );
    });
    context('check contentcards and contents', () => {
        it('check first contentcard and contact form inputfields', () => {
            cy.get(componentSelectors.contentCard)
                .first()
                .within(() => {
                    cy.get(componentSelectors.inputField)
                        .should('have.length', 5)
                        .and('be.visible');
                });
        });
        it('check contact form textbox', () => {
            cy.get(componentSelectors.textArea).should('be.visible');
        });
        it('check contact form checkbox', () => {
            cy.get(componentSelectors.checkbox).should('be.visible');
        });
        it('check contact form send-button', () => {
            cy.get(componentSelectors.button + modSelectors.send).should(
                'be.visible',
            );
        });
        it('check second content card and map', () => {
            cy.get(componentSelectors.contentCard)
                .last()
                .within(() => {
                    cy.get(
                        componentSelectors.headline + modSelectors.h2,
                    ).should('contain', 'Ihr Weg zu mir:');
                    it('check map with default firm address', () => {
                        cy.get('iframe')
                            .should('be.visible')
                            .should(
                                'have.attr',
                                'src',
                                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.0659433337423!2d6.845202315751915!3d51.01493057955721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf30fb779e2a5b%3A0x2bdedfd426ff5c1d!2sJohannes-Prassel-Stra%C3%9Fe%2083%2C%2050765%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1604447572563!5m2!1sde!2sde',
                            );
                    });
                });
        });
    });
});
