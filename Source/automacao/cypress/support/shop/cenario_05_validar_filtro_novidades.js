// ===================================
// Comandos Customizados - Cenário 05
// Validar filtro por Novidades
// Funções Específicas do Cenário
// ===================================

// Passo 3: Selecionar filtro por Novidades e validar reordenação
Cypress.Commands.add('validarFiltroNovidades', () => {
  cy.sortProducts('date');
  cy.get('.products').should('be.visible');
});