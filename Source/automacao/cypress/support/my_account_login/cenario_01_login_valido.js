// ===================================
// Comandos Específicos - Cenário 01: Login Válido
// ===================================

// Comando para verificar login bem-sucedido
Cypress.Commands.add('verificarLoginComSucesso', () => {
  cy.contains('From your account dashboard').should('be.visible')
})
