// ===================================
// Comandos Customizados - Cenário 03
// Validar filtro por Popularidade
// Funções Específicas do Cenário
// ===================================

// Passo 3: Selecionar filtro por Popularidade e validar reordenação
Cypress.Commands.add('validarFiltroPopularidade', () => {
  cy.sortProducts('popularity');
  cy.get('.products').should('be.visible');
});