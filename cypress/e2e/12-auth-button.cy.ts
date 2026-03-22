describe('12. Authorize button on the home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should display an active Authorize button', () => {
    cy.contains('button', 'Авторизуватися')
      .should('be.visible')
      .and('not.be.disabled');
  });
});