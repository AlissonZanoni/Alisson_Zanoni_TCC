// ===================================
// Comandos Específicos - Cenário 02: Editar Billing Address
// ===================================

// Verificar navegação para página de edição de Billing Address
// Usado em: Cenário 2
Cypress.Commands.add('verificarNavegacaoBillingAddress', () => {
  cy.url().should('include', '/my-account/edit-address/billing')
})
