describe('1. Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should load the home page and display the main heading', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain', "LoveSushi — суші та роли з любов'ю");

    cy.title().should('include', 'LoveSushi');
  });
});