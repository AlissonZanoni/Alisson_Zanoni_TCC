// ===================================
// Comandos Customizados - Cenário 02
// Página inicial com apenas três "Arrivals"
// Funções Específicas (não duplicadas em commands.js)
// ===================================

// Passo 5: Verifique se a página inicial possui apenas três "Arrivals"
Cypress.Commands.add('verificarQuantidadeArrivals', (expectedCount) => {
  // Arrivals estão em ul.products > li.product
  cy.get('ul.products li.product').should('have.length', expectedCount)
})

// Passo 6: Validação - Verifique se os Arrivals estão visíveis
Cypress.Commands.add('verificarArrivalsVisiveis', () => {
  cy.get('ul.products li.product').each(($arrival) => {
    cy.wrap($arrival).should('be.visible')
  })
})

// Comando auxiliar: Verificar se as imagens dos Arrivals estão visíveis
Cypress.Commands.add('verificarImagensArrivals', (expectedCount) => {
  cy.get('ul.products li.product img').should('have.length', expectedCount)
  cy.get('ul.products li.product img').each(($img) => {
    cy.wrap($img).should('be.visible')
    cy.wrap($img).should('have.attr', 'src').and('not.be.empty')
  })
})