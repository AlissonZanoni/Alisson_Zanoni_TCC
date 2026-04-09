// ===================================
// Comandos Customizados - Shop
// Funções Compartilhadas entre múltiplos cenários
// ===================================

// Comando para ordenar produtos
// Utilizado nos cenários: 03, 04, 05, 06, 07
Cypress.Commands.add('sortProducts', (sortOption) => {
  // Seleciona a opção e confirma que o select recebeu o valor
  cy.get('select[name="orderby"]').select(sortOption).should('have.value', sortOption)

  // Confirma que a URL atual contém o parâmetro orderby
  cy.location('search').should('contain', `orderby=${sortOption}`)

  // Garante que a listagem de produtos foi carregada
  cy.get('.products').should('be.visible')
})

