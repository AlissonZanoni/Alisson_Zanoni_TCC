// ===================================
// Comandos Customizados - My Account Registration
// ===================================

// Comando para acessar a página de registro
Cypress.Commands.add('navigateToRegistrationPage', () => {
  cy.visit('http://practice.automationtesting.in/')
  cy.contains('My Account').click()
})

// Comando para preencher formulário de registro
Cypress.Commands.add('fillRegistrationForm', (email, password) => {
  cy.get('input[name="email"]').type(email)
  cy.get('input[name="password"]').type(password)
  cy.get('button[name="register"]').click()
})

// Comando para verificar sucesso no registro
Cypress.Commands.add('verifyRegistrationSuccess', () => {
  cy.url().should('contain', '/')
})

// Comando para verificar erro de registro
Cypress.Commands.add('verifyRegistrationError', (errorMessage) => {
  cy.contains(errorMessage).should('be.visible')
})
