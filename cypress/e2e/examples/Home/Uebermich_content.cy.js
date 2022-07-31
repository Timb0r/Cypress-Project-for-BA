Cypress.Commands.add('inContent', (callback) => {
    cy.get('main').within(callback);
});

describe('Check aboutme page and its content', () => {
    beforeEach(() => {
        cy.visit('https://cy-borg.net/hortt-dev/');
        cy.wait(200);
        cy.contains('Über mich').click();
    });
    context('check aboutMe content', () => {
        it('check h1', () => {
            cy.inContent(() => {
                cy.get('div.contentRow');
                cy.get('h1')
                    .should('contain', 'Lernen Sie mich kennen')
                    .and('be.visible')
                    .and('not.be.empty');
            });
        });
        it('check h2', () => {
            cy.inContent(() => {
                cy.get('h2')
                    .should('contain', 'Manfred Hortt')
                    .and('be.visible')
                    .and('not.be.empty');
                cy.contains('Ihr Berater in Köln und Umgebung').should(
                    'be.visible',
                );
            });
        });
        it('image', () => {
            cy.inContent(() => {
                cy.get('img.aboutMe__image')
                    .should('be.visible')
                    .should('have.attr', 'src', 'img/aboutMe.jpg')
                    .should('have.attr', 'alt', 'hortt_aboutMe');
            });
        });
        it('Eckdaten', () => {
            cy.inContent(() => {
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
