/// <reference types="cypress" />
describe('Scrolls down to footer, clicks cookie banner, checks if impressum is visible', () => {
  
    
    it('.scrollIntoView() - scroll an element into view', () => {
      cy.visit('https://cy-borg.net/hortt-dev/#/kontakt');
      // scroll the button into view, as if the user had scrolled
      cy.get('.bottomFooter__links').scrollIntoView()
        .should('be.visible')

    })
  });
