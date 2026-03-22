describe('6. Контактна інформація', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Успішно відображає контактну електронну пошту на сторінці', () => {
    cy.get('a[href^="mailto:"]')
      .should('be.visible')
      .and('contain', 'hello@lovesushi.ua');
  });
});