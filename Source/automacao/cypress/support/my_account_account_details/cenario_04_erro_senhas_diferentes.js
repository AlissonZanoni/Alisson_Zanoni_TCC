// ===================================
// Comandos Específicos - Cenário 04: Erro ao Mudar Senha (Confirmação Diferente)
// ===================================

// Verificar mensagem de erro de senha não correspondente
// Usado em: Cenário 4
Cypress.Commands.add('verificarMensagemErroSenhasDiferentes', () => {
  cy.get('li').should('be.visible').should('contain', 'New passwords do not match.')
})
