// ===================================
// Comandos Específicos - Cenário 05: Senha Atual Necessária para Mudança
// ===================================

// Verificar mensagem de erro quando senha atual não é fornecida
// Usado em: Cenário 5
Cypress.Commands.add('verificarMensagemErroSenhaAtualNecessaria', () => {
  cy.get('.woocommerce-error').should('be.visible').should('contain', 'current password')
})
