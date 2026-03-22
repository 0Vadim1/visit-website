describe('7. Кнопка переходу до контактів на головному екрані', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Неуспішно переходить до секції "Контакти" через кнопку на головному екрані', () => {
    cy.get('div.mt-8.flex.flex-wrap.gap-3')
      .find('a')
      .contains('Контакти')
      .should('be.visible')
      .click();

    cy.url().should('include', '/#contacts');
  });
});