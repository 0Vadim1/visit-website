describe('9. Пошук товару з малої літери', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Неуспішно знаходить товар "Філадельфія" при введенні назви з малої літери', () => {
    cy.get('input[placeholder*="Пошук по меню"]')
      .clear()
      .type('філадельфія{enter}');

    cy.contains('button', 'Філадельфія').should('be.visible');
  });
});