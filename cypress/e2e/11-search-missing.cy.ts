describe('11. Search for a non-existing product', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should not display results for a non-existing product', () => {
    cy.get('input[placeholder*="Пошук по меню"]')
      .clear()
      .type('НеіснуючийРол123{enter}');

    cy.contains('button', 'НеіснуючийРол123').should('not.exist');
  });
});