// ===================================
// Comandos Customizados - My Account (Área Logada)
// Funções Compartilhadas entre Múltiplos Cenários
// ===================================

// Comando para acessar o Dashboard (pós-login)
// Usado em: Todos os cenários (1-5)
Cypress.Commands.add('acessarDashboard', () => {
  cy.acessarPaginaLogin()
  cy.fazerLoginComCredenciais('registro_1776123104744@example.com', 'Senha@1234')
  cy.verificarLoginComSucesso()
})

// Comando para clicar no link My Account no Dashboard
// Usado em: Cenários 1, 3, 4, 5
Cypress.Commands.add('clicarNoLinkMyAccount', () => {
  cy.contains('a', 'My Account').should('be.visible').click()
})

// Comando para clicar no link Orders
// Usado em: Cenário 2
Cypress.Commands.add('clicarNoLinkOrders', () => {
  cy.contains('a', 'Orders').should('be.visible').click()
})

// Comando para clicar no botão View do primeiro pedido
// Usado em: Cenários futuros (depende de pedidos existirem)
Cypress.Commands.add('clicarNoBotaoViewPrimeiroPedido', () => {
  cy.contains('button', 'View').first().should('be.visible').click()
})

// Comando para clicar no link Addresses
// Usado em: Cenários 3, 4
Cypress.Commands.add('clicarNoLinkAddresses', () => {
  cy.contains('a', 'Addresses').should('be.visible').click()
})

// Comando para clicar no link Account Details
// Usado em: Cenários futuros (removido temporariamente da suite)
Cypress.Commands.add('clicarNoLinkAccountDetails', () => {
  cy.contains('a', 'Account Details').should('be.visible').click()
})

// Comando para clicar no botão Logout
// Usado em: Cenário 5
Cypress.Commands.add('clicarNoBotaoLogout', () => {
  cy.contains('a', 'Logout').should('be.visible').click()
})

// ===================================
// Comandos de Verificação/Validação
// ===================================

// Verificar que o Dashboard está exibido
// Usado em: Cenário 1
Cypress.Commands.add('verificarDashboardExibido', () => {
  cy.contains('From your account dashboard').should('be.visible')
})

// Verificar redirecionamento para página de Orders
// Usado em: Cenário 2
Cypress.Commands.add('verificarPaginaOrders', () => {
  cy.url().should('include', '/my-account/orders/')
})

// Verificar detalhes do pedido exibidos
// Usado em: Cenários futuros (depende de pedidos existirem)
Cypress.Commands.add('verificarDetalhesOrderExibidos', () => {
  cy.contains('Order Details').should('be.visible')
  cy.contains('Billing Address').should('be.visible')
  cy.contains('Shipping Address').should('be.visible')
})

// Verificar informações do pedido exibidas
// Usado em: Cenários futuros (depende de pedidos existirem)
Cypress.Commands.add('verificarInformacoesOrderExibidas', () => {
  cy.contains('Order #').should('be.visible')
  cy.contains('Order Date').should('be.visible')
  cy.contains('Order Status').should('be.visible')
})

// Verificar redirecionamento para página de Endereço
// Usado em: Cenários 3, 4
Cypress.Commands.add('verificarPaginaEndereco', () => {
  cy.url().should('include', '/my-account/edit-address')
})

// Verificar redirecionamento para página de Detalhes da Conta
// Usado em: Cenários futuros (removido temporariamente da suite)
Cypress.Commands.add('verificarPaginaDetalhesContaExibida', () => {
  cy.url().should('include', '/my-account/edit-account')
})

// Verificar que campos de login estão visíveis
// Usado em: Cenário 5
Cypress.Commands.add('verificarCamposLoginVisiveis', () => {
  cy.get('input[name="username"]').should('be.visible')
  cy.get('input[name="password"]').should('be.visible')
})
