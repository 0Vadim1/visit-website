describe('10. Email hyperlink behavior', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should keep the same page URL after clicking the email link', () => {
    cy.url().then((currentUrl) => {
      cy.get('a[href^="mailto:"]')
        .should('be.visible')
        .and('contain', 'hello@lovesushi.ua')
        .click();

      cy.url().should('eq', currentUrl);
    });
  });
});