describe('2. Navigation via menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should navigate to the Contacts section using the top menu', () => {
    cy.contains('Контакти')
      .should('be.visible')
      .click();

    cy.url().should('include', '/#contacts');
  });
});