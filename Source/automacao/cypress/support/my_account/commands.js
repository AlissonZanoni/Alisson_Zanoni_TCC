// ===================================
// Comandos Customizados - My Account (Área Logada)
// ===================================

// Comando para acessar o dashboard
Cypress.Commands.add('navigateToDashboard', () => {
  cy.contains('My Account').click()
})

// Comando para acessar pedidos
Cypress.Commands.add('navigateToOrders', () => {
  cy.contains('My Account').click()
  cy.contains('Orders').click()
})

// Comando para acessar endereços
Cypress.Commands.add('navigateToAddresses', () => {
  cy.contains('My Account').click()
  cy.contains('Address').click()
})

// Comando para acessar detalhes da conta
Cypress.Commands.add('navigateToAccountDetails', () => {
  cy.contains('My Account').click()
  cy.contains('Account Details').click()
})

// Comando para fazer logout
Cypress.Commands.add('logout', () => {
  cy.contains('My Account').click()
  cy.contains('Logout').click()
})
