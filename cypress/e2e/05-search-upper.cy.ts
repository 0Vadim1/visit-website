describe('5. Product search with uppercase input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should find the product "Філадельфія" when entered with an uppercase first letter', () => {
    cy.get('input[placeholder*="Пошук по меню"]')
      .should('be.visible')
      .clear()
      .type('Філадельфія{enter}');

    cy.contains('button', 'Філадельфія').should('be.visible');
  });
});