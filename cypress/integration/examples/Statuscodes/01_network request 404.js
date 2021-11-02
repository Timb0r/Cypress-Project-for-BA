/// <reference types="cypress" />
describe('status 404', () => {

  it('status 404', () => {
    cy.request({
    url:('https://cy-borg.net/hortt-dev/404'),
    failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(404)
    })
    });
  })