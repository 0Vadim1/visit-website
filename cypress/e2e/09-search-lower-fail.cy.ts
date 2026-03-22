describe('9. Product search with lowercase input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should find the product "Філадельфія" when entered in lowercase', () => {
    cy.get('input[placeholder*="Пошук по меню"]')
      .clear()
      .type('філадельфія{enter}');

    cy.contains('button', 'Філадельфія').should('be.visible');
  });
});