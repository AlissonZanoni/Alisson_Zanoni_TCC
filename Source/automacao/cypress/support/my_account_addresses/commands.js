// ===================================
// Comandos Customizados - My Account (Addresses)
// Funções Compartilhadas entre Múltiplos Cenários
// ===================================

// Comando para acessar a página Addresses (pós-login)
// Usado em: Todos os cenários (1-3)
Cypress.Commands.add('acessarPaginaAddresses', () => {
  cy.acessarPaginaLogin()
  cy.fazerLoginComCredenciais('registro_1776123104744@example.com', 'Senha@1234')
  cy.verificarLoginComSucesso()
  cy.contains('a', 'Addresses').should('be.visible').click()
  cy.url().should('include', '/my-account/edit-address')
})

// Comando para clicar no botão Edit do Billing Address
// Usado em: Cenário 2
Cypress.Commands.add('clicarEditarBillingAddress', () => {
  cy.get('.u-column1.col-1.woocommerce-Address').find('a.edit').should('be.visible').click()
})

// Comando para clicar no botão Edit do Shipping Address
// Usado em: Cenário 3
Cypress.Commands.add('clicarEditarShippingAddress', () => {
  cy.get('.u-column2.col-2.woocommerce-Address').find('a.edit').should('be.visible').click()
})

// Selecionar país e aguardar atualização da lista de estados
// Usado em: Cenários 04, 08
Cypress.Commands.add('selecionarPais', (pais) => {
  cy.get('#s2id_billing_country .select2-choice').click()
  cy.get('[aria-owns="select2-results-1"]').type(pais)
  cy.get('#select2-results-1 .select2-result-label').contains(pais).click()
  cy.wait(1000) // Aguardar atualização de estados
})

// Selecionar estado e aguardar atualização
// Usado em: Cenários 04, 06, 07, 09
Cypress.Commands.add('selecionarEstado', (estado) => {
  cy.get('#s2id_billing_state .select2-choice').click()
  cy.get('[aria-owns="select2-results-2"]').type(estado)
  cy.get('#select2-results-2 .select2-result-label').contains(estado).click()
  cy.wait(500)
})

// Clicar no botão Save Address
// Usado em: Cenários 04, 05, 06, 07, 08, 09, 10
Cypress.Commands.add('clicarBotaoSaveAddress', () => {
  cy.get('input[name="save_address"]').should('be.visible').click()
})

// Verificar mensagem de sucesso ao salvar endereço
// Usado em: Cenários 04, 08, 09, 10
Cypress.Commands.add('verificarMensagemSucesso', () => {
  cy.get('.woocommerce-message').should('be.visible')
})
