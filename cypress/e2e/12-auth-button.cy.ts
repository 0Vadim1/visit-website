describe('12. Кнопка авторизації на головній сторінці', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Успішно відображає активну кнопку "Авторизуватися"', () => {
    cy.contains('button', 'Авторизуватися')
      .should('be.visible')
      .and('not.be.disabled');
  });
});