describe('10. Перевірка гіперпосилання електронної пошти', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Після натискання на пошту URL сторінки не змінюється', () => {
    cy.url().then((currentUrl) => {
      cy.get('a[href^="mailto:"]')
        .should('be.visible')
        .and('contain', 'hello@lovesushi.ua')
        .click();

      cy.url().should('eq', currentUrl);
    });
  });
});