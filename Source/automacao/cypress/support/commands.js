// ===================================
// Comandos Globais Compartilhados
// Utilizados por todas as suites de testes
// ===================================

// Passo 1 e 2: Abra o navegador e insira a URL
Cypress.Commands.add('abrirNavigadorEInserirURL', () => {
  // Bloquear scripts do Google AdSense e scripts de rastreamento problemáticos
  cy.intercept('**/pagead/js/adsbygoogle.js', { statusCode: 404 }).as('blockAds')
  cy.intercept('**/pagead2.googlesyndication.com/**', { statusCode: 404 }).as('blockGoogleAds')
  cy.intercept('**/google-analytics.com/**', { statusCode: 404 }).as('blockGoogleAnalytics')
  cy.intercept('**/googletagmanager.com/**', { statusCode: 404 }).as('blockGTM')
  cy.intercept('**/connect.facebook.net/**', { statusCode: 404 }).as('blockFacebook')
  cy.intercept('**/cdn.jsdelivr.net/**', { statusCode: 404 }).as('blockCDN')

  // Visitar versão HTTPS para evitar redirecionamento 301 e problemas de cross-origin
  cy.visit('https://practice.automationtesting.in/', { 
    failOnStatusCode: false,
    onBeforeLoad: (win) => {
      // Desabilitar tratamento padrão de erros não capturados
      win.handleError = function() { return true }
    }
  })
  
  // Aguardar a página estar completamente carregada
  cy.wait(1000)
  cy.document().should('have.property', 'readyState', 'complete')
})

// Passo 3: Clique no menu "Shop"
Cypress.Commands.add('clicarNoMenuShop', () => {
  cy.contains('a', 'Shop', { timeout: 10000 }).should('be.visible').click()
  // Aguardar a página carregar completamente
  cy.wait(1500)
  cy.location().then((loc) => {
    cy.log(`Navegou para: ${loc.href}`)
  })
})

// Passo 4: Clique no botão do menu "Home"
Cypress.Commands.add('clicarNoMenuHome', () => {
  cy.contains('a', 'Home', { timeout: 10000 }).should('be.visible').click()
  // Aguardar a página carregar completamente
  cy.wait(1500)
})

// Utilitário compartilhado: gera email único para registros
Cypress.Commands.add('generateUniqueEmail', () => {
  return `registro_${Date.now()}@example.com`
})

// Comando global: clicar no menu My Account (compartilhado entre login e registro)
Cypress.Commands.add('clicarNoMenuMyAccount', () => {
  cy.contains('a', 'My Account', { timeout: 10000 }).should('be.visible').click()
  cy.wait(1000)
})

// ==========================================
// COMANDOS DE ESTABILIDADE ADICIONAIS
// ==========================================

// Aguardar elemento estar visível com retry
Cypress.Commands.add('aguardarElemento', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible')
})

// Validar que a página carregou completamente
Cypress.Commands.add('validarPaginaCarregada', () => {
  cy.document().should('have.property', 'readyState', 'complete')
  cy.wait(500)
})

// Limpar cookies e storage entre testes
Cypress.Commands.add('limparSession', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
})
