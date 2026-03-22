describe('11. Пошук неіснуючого товару', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Не відображає результатів для неіснуючого товару', () => {
    cy.get('input[placeholder*="Пошук по меню"]')
      .clear()
      .type('НеіснуючийРол123{enter}');

    cy.contains('button', 'НеіснуючийРол123').should('not.exist');
  });
});