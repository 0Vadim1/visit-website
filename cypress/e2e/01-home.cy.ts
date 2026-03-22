describe('1. Головна сторінка', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Успішне завантаження головної сторінки та перевірка заголовку', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain', "LoveSushi — суші та роли з любов'ю");

    cy.title().should('include', 'LoveSushi');
  });
});