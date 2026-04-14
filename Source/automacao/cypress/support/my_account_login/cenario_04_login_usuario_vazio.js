// ===================================
// Comandos Específicos - Cenário 04: Login com Usuário Vazio
// ===================================

// Comando para fazer login sem preencher o usuário
Cypress.Commands.add('fazerLoginSemUsuario', (senha) => {
  cy.get('#password').should('be.visible').clear().type(senha)
  cy.get('input[name="login"][value="Login"]').should('be.visible').click()
})
