// ===================================
// Comandos Customizados - My Account Login
// ===================================

// Comando para acessar a página de login
Cypress.Commands.add('navigateToLoginPage', () => {
  cy.visit('http://practice.automationtesting.in/')
  cy.contains('My Account').click()
})

// Comando para fazer login com credenciais
Cypress.Commands.add('loginWithCredentials', (username, password) => {
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('button[name="login"]').click()
})

// Comando para verificar mensagem de erro de login
Cypress.Commands.add('verifyLoginErrorMessage', (errorMessage) => {
  cy.contains(errorMessage).should('be.visible')
})

// Comando para verificar login bem-sucedido
Cypress.Commands.add('verifyLoginSuccess', () => {
  cy.contains('Dashboard').should('be.visible')
})
