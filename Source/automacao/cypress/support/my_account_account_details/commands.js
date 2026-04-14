// ===================================
// Comandos Customizados - My Account (Account Details)
// Funções Compartilhadas entre Múltiplos Cenários
// ===================================

// Comando para acessar a página Account Details (pós-login)
// Usado em: Todos os cenários (1-5)
Cypress.Commands.add('acessarPaginaAccountDetails', () => {
  cy.acessarPaginaLogin()
  cy.fazerLoginComCredenciais('registro_1776123104744@example.com', 'Senha@1234')
  cy.verificarLoginComSucesso()
  cy.contains('a', 'Account Details').should('be.visible').click()
  cy.url().should('include', '/my-account/edit-account')
})

// Comando para limpar campo por ID
// Usado em: Cenários 3, 4, 5
Cypress.Commands.add('limparCampoPorId', (fieldId) => {
  cy.get(`#${fieldId}`).clear()
})

// Comando para preencher campo por ID
// Usado em: Cenários 2, 3, 4, 5
Cypress.Commands.add('preencherCampoPorId', (fieldId, valor) => {
  cy.get(`#${fieldId}`).clear().type(valor)
})

// Comando para clicar no botão Save changes
// Usado em: Cenários 2, 3, 4, 5
Cypress.Commands.add('clicarBotaoSaveChanges', () => {
  cy.get('input[name="save_account_details"]').should('be.visible').click()
})

// Comando para verificar mensagem de sucesso na atualização
// Usado em: Cenários 2, 3, 4
Cypress.Commands.add('verificarMensagemSucesso', () => {
  cy.get('.woocommerce-message').should('be.visible').should('contain', 'successfully')
})
