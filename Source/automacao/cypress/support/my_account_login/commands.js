// ===================================
// Comandos Customizados - My Account Login
// Funções Compartilhadas entre Múltiplos Cenários
// ===================================

// Comando para acessar a página de login
// Usado em: Cenários 1, 2, 3, 4, 5, 6, 7, 8
Cypress.Commands.add('acessarPaginaLogin', () => {
  cy.visit('http://practice.automationtesting.in/')
  cy.contains('My Account').click()
})

// Comando para fazer login com credenciais
// Usado em: Cenários 1, 2, 7
Cypress.Commands.add('fazerLoginComCredenciais', (usuario, senha) => {
  cy.get('input[name="username"]').should('be.visible').clear().type(usuario)
  cy.get('#password').should('be.visible').clear().type(senha)
  cy.get('input[name="login"][value="Login"]').should('be.visible').click()
})

// Comando para verificar mensagem de erro de login
// Usado em: Cenários 2, 3, 4, 5, 7
Cypress.Commands.add('verificarMensagemErroLogin', (mensagemErro) => {
  cy.get('.woocommerce-error').should('be.visible').should('contain', mensagemErro)
})

// Comando para verificar que o campo de senha está mascarado
// Usado em: Cenário 6
Cypress.Commands.add('verificarCampoSenhaMascarado', () => {
  cy.get('input[name="password"]').should('have.attr', 'type', 'password')
})
