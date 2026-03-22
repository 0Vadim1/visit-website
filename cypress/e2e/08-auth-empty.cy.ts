describe('8. Login form validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('button', 'Авторизуватися').click();
  });

  it('Should show an error when trying to log in with empty fields', () => {
    cy.get('form').find('button[type="submit"]').click();

    cy.get('input[name="email"]:invalid').should('have.length', 1);
  });
});