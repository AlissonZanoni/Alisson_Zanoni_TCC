// ===================================
// Comandos Específicos - Cenário 05: Login com Usuário e Senha Vazios
// ===================================

// Comando para fazer login sem preencher usuário e senha
Cypress.Commands.add('fazerLoginSemUsuarioESenha', () => {
  cy.get('input[name="login"][value="Login"]').should('be.visible').click()
})
