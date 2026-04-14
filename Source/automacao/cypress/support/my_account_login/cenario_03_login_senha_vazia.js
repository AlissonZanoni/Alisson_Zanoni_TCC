// ===================================
// Comandos Específicos - Cenário 03: Login com Senha Vazia
// ===================================

// Comando para fazer login sem preencher a senha
Cypress.Commands.add('fazerLoginSemSenha', (usuario) => {
  cy.get('input[name="username"]').should('be.visible').clear().type(usuario)
  cy.get('input[name="login"][value="Login"]').should('be.visible').click()
})
