describe('Accueil', () => {
  it('devrait afficher le titre', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Portfolio');
  });
});
