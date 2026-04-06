// ===================================
// Comandos Customizados - Home Page
// Funções Comuns (compartilhadas entre cenários)
// ===================================

// Passo 1 e 2: Abra o navegador e insira a URL
Cypress.Commands.add('abrirNavigadorEInserirURL', () => {
  // Bloquear scripts do Google AdSense e scripts de rastreamento problemáticos
  cy.intercept('**/pagead/js/adsbygoogle.js', { statusCode: 404 }).as('blockAds')
  cy.intercept('**/pagead2.googlesyndication.com/**', { statusCode: 404 }).as('blockGoogleAds')
  
  cy.visit('http://practice.automationtesting.in/')
})

// Passo 3: Clique no menu "Shop"
Cypress.Commands.add('clicarNoMenuShop', () => {
  cy.contains('a', 'Shop').click()
  cy.wait(1000) // Aguarda o carregamento da página
})

// Passo 4: Clique no botão do menu "Home"
Cypress.Commands.add('clicarNoMenuHome', () => {
  cy.contains('a', 'Home').click()
  cy.wait(1000) // Aguarda o carregamento da página
})