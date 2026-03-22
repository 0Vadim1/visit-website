describe('6. Contact information', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should display the contact email address on the page', () => {
    cy.get('a[href^="mailto:"]')
      .should('be.visible')
      .and('contain', 'hello@lovesushi.ua');
  });
});