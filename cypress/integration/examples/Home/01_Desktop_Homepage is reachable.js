/// <reference types="cypress" />
describe('Home page is reachable', () => {
  it('visits website', () => {

    cy.visit('https://cy-borg.net/hortt-dev/'),
    cy.wait(200);
    })
  });
