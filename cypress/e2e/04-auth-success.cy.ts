describe('4. Successful authorization', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('button', 'Авторизуватися').click();

    cy.contains('Вхід в акаунт').should('be.visible');
  });

  it('Should successfully submit the login form with valid credentials', () => {
    cy.get('input[name="email"]')
      .should('be.visible')
      .type('oleg.dev@example.com')
      .should('have.value', 'oleg.dev@example.com');

    cy.get('input[type="password"]')
      .should('be.visible')
      .type('CorrectPassword123')
      .should('have.value', 'CorrectPassword123');

    cy.get('form').find('button[type="submit"]').click();

    cy.contains('Вхід в акаунт').should('not.exist');
  });
});