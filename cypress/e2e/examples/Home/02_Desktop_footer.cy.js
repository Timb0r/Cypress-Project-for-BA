describe('Desktop Footer', () => {
    it('checks URL, checks footer visibility and contained elements', () => {
        cy.visit('https://cy-borg.net/hortt-dev/');
        cy.url().should('include', 'https://cy-borg.net/hortt-dev/');
        cy.get('.bottomFooter__links').within(() => {
            cy.get('a')
                .contains('Impressum')
                .should('be.visible')
                .should('have.attr', 'href', '#/impressum');
        });
    });
});
