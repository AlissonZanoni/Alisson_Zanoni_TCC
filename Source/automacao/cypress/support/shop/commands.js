// ===================================
// Comandos Customizados - Shop
// ===================================

// Comando para acessar a loja
Cypress.Commands.add('navigateToShop', () => {
  cy.visit('http://practice.automationtesting.in/')
  cy.contains('Shop').click()
})

// Comando para filtrar por preço
Cypress.Commands.add('filterByPrice', (minPrice, maxPrice) => {
  cy.get('input[name="min_price"]').clear().type(minPrice)
  cy.get('input[name="max_price"]').clear().type(maxPrice)
  cy.get('button[name="filter"]').click()
})

// Comando para adicionar produto ao carrinho
Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains(productName).parent().within(() => {
    cy.contains('Add to Basket').click()
  })
})

// Comando para ordenar produtos
Cypress.Commands.add('sortProducts', (sortOption) => {
  cy.get('select[name="orderby"]').select(sortOption)
})

// Comando para visualizar carrinho
Cypress.Commands.add('viewCart', () => {
  cy.contains('View Basket').click()
})

// Comando para proceder ao checkout
Cypress.Commands.add('proceedToCheckout', () => {
  cy.contains('Proceed to Checkout').click()
})
