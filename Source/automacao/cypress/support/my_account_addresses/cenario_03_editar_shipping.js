// ===================================
// Comandos Específicos - Cenário 03: Editar Shipping Address
// ===================================

// Verificar navegação para página de edição de Shipping Address
// Usado em: Cenário 3
Cypress.Commands.add('verificarNavegacaoShippingAddress', () => {
  cy.url().should('include', '/my-account/edit-address/shipping')
})
