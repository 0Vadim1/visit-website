describe('7. Contacts button on the hero section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should navigate to the Contacts section using the hero button', () => {
    cy.get('div.mt-8.flex.flex-wrap.gap-3')
      .find('a')
      .contains('Контакти')
      .should('be.visible')
      .click();

    cy.url().should('include', '/#contacts');
  });
});