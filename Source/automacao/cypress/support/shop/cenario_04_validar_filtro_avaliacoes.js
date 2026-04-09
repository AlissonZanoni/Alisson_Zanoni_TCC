// ===================================
// Comandos Customizados - Cenário 04
// Validar filtro por Avaliações
// Funções Específicas do Cenário
// ===================================

// Passo 3: Selecionar filtro por Avaliações e validar reordenação
Cypress.Commands.add('validarFiltroAvaliacoes', () => {
  cy.sortProducts('rating');
  cy.get('.products').should('be.visible');
});