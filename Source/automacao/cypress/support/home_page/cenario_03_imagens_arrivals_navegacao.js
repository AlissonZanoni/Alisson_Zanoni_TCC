// ===================================
// Comandos Customizados - Cenário 03
// Página inicial - Imagens em "Arrivals" devem navegar corretamente
// Funções Específicas (não duplicadas em commands.js)
// ===================================

// Passo 3: Clique em um "Arrival" (imagem)
Cypress.Commands.add('clicarNaImagemArrivals', () => {
  // Captura o título do produto antes de clicar
  cy.get('ul.products li.product').first().find('h3').then(($h3) => {
    const tituloArrivals = $h3.text()
    cy.wrap(tituloArrivals).as('tituloArrivalsEsperado')
  })
  
  // Clica na primeira imagem do produto em Arrivals
  cy.get('ul.products li.product a.woocommerce-LoopProduct-link').first().click()
  cy.wait(2000) // Aguarda carregamento da página do produto
})

// Passo 4: Verifique se está navegando para a página do Arrival selecionado
Cypress.Commands.add('verificarNavegacaoParaPaginaArrivals', () => {
  // Valida que chegou em uma página de produto
  cy.url().should('include', '/product/')
  
  // Valida que o título da página é o mesmo que foi clicado
  cy.get('@tituloArrivalsEsperado').then((tituloEsperado) => {
    cy.get('h1.product_title').should('contain.text', tituloEsperado)
  })
})
