describe('3. Відкриття форми авторизації', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Успішно відкриває модальне вікно входу після натискання кнопки "Авторизуватися"', () => {
    cy.contains('button', 'Авторизуватися').click();

    cy.get('form').should('be.visible');
    cy.contains('Вхід в акаунт').should('be.visible');
  });
});