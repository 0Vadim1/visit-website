describe('3. Opening the login form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should open the login modal after clicking the Authorize button', () => {
    cy.contains('button', 'Авторизуватися').click();

    cy.get('form').should('be.visible');
    cy.contains('Вхід в акаунт').should('be.visible');
  });
});