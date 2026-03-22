describe('8. Валідація форми входу', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('button', 'Авторизуватися').click();
  });

  it('Показує помилку при спробі входу з порожніми полями', () => {
    cy.get('form').find('button[type="submit"]').click();

    cy.get('input[name="email"]:invalid').should('have.length', 1);
  });
});