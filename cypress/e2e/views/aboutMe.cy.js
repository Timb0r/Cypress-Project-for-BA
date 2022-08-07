import { routes } from '../constants/url';

Cypress.Commands.add('inContent', (callback) => {
    cy.get('main').within(callback);
});

describe('Check aboutme page and content', () => {
    beforeEach(() => {
        cy.visit(routes.aboutMe);
    });
    it('check title', () => {
        cy.inContent(() => {
            cy.get('h1')
                .should('contain', 'Lernen Sie mich kennen')
                .and('be.visible');
        });
    });
    context('check content box elements', () => {
        it('check name headline and subheadline', () => {
            cy.inContent(() => {
                cy.get('h2')
                    .should('contain', 'Manfred Hortt')
                    .and('be.visible');
                cy.contains('Ihr Berater in Köln und Umgebung').should(
                    'be.visible',
                );
            });
        });
        it('check image', () => {
            cy.inContent(() => {
                cy.get('img.aboutMe__image')
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/aboutMe.jpg')
                    .should('have.attr', 'alt', 'hortt_aboutMe');
            });
        });
        it('check "Eckdaten" section', () => {
            cy.inContent(() => {
                // iteriert lösen und datacomponents nutzen
                cy.contains('Ein paar Eckdaten zu mir:').should('be.visible');
                cy.get('ul.aboutMe__basicInfoList');
                cy.contains('li', 'Verheiratet, Vater von zwei Kindern').should(
                    'be.visible',
                );
                cy.contains('li', 'Ausbildung zum Bankkaufmann').should(
                    'be.visible',
                );
                cy.contains('li', 'Studium zum Bankfachwirt').should(
                    'be.visible',
                );
                cy.contains(
                    'li',
                    'Fachberater für Baufinanzierungen und komplexe Finanzierungen als Prokurist in der Commerzbank (1984- 2012)',
                ).should('be.visible');
                cy.contains(
                    'li',
                    'Senior-Spezialberater Baufinanzierung im Privat- und Geschäftsbankenbereich sowie im Kooperationsgeschäft der Deutschen Bank (2012-2019)',
                ).should('be.visible');
                cy.contains(
                    'li',
                    'Seit 2020 selbständiger Baufinanzierungsberater',
                ).should('be.visible');
            });
        });
    });
});
