/// <reference types="cypress" />
describe('status 200', () => {
    it('status 200', () => {
        cy.request({
            url: 'https://cy-borg.net/hortt-dev/#/',
        }).then((resp) => {
            expect(resp.status).to.eq(200);
        });
    });
});
