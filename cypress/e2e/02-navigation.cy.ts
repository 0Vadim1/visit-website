describe('2. Навігація через меню', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Успішно переходить до секції "Контакти" через верхнє меню', () => {
    cy.contains('Контакти')
      .should('be.visible')
      .click();

    cy.url().should('include', '/#contacts');
  });
});