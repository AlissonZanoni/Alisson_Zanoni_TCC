// ===================================
// Comandos Customizados - Cenário 04
// Verificação do preço e botão 'ADD TO BASKET' nos Arrivals
// Funções Específicas (não duplicadas em commands.js)
// ===================================

// Verifica que cada Arrival exibe o título do produto
Cypress.Commands.add('verificarTituloArrival', () => {
  cy.get('ul.products li.product h3').each(($h3) => {
    cy.wrap($h3).invoke('text').should('not.be.empty')
  })
})

// Verifica que cada Arrival exibe o preço do produto
Cypress.Commands.add('verificarPrecoArrival', () => {
  cy.get('ul.products li.product .price').each(($price) => {
    cy.wrap($price).should('be.visible')
    cy.wrap($price).invoke('text').should('match', /[0-9]/)
  })
})

// Verifica que cada Arrival possui botão ADD TO BASKET visível/clicável
Cypress.Commands.add('verificarAddToBasketVisivel', () => {
  cy.get('ul.products li.product').each(($li) => {
    cy.wrap($li).find('a.button, a.add_to_cart_button, button.add_to_cart_button').should('exist').and('be.visible')
  })
})
