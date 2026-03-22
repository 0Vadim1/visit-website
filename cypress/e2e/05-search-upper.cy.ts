describe('5. Пошук товару з великої літери', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Успішно знаходить товар "Філадельфія" при введенні назви з великої літери', () => {
    cy.get('input[placeholder*="Пошук по меню"]')
      .should('be.visible')
      .clear()
      .type('Філадельфія{enter}');

    cy.contains('button', 'Філадельфія').should('be.visible');
  });
});