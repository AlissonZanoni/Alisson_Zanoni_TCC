// ===================================
// Comandos Customizados - Cenário 09
// Validar Promoções
// Funções Específicas do Cenário
// ===================================

// Passo 3-5: Verificar apresentação de preço antigo riscado e preço atual
Cypress.Commands.add('validarPromocoes', () => {
  // Garante que existem produtos na listagem
  cy.get('.products .product').should('have.length.gte', 1)

  // Para cada produto, se estiver em promoção (tem .onsale ou .sale), valida del e ins
  cy.get('.products .product').each(($product) => {
    cy.wrap($product).then(($p) => {
      const isSale = $p.hasClass('sale') || $p.find('.onsale').length > 0
      if (isSale) {
        cy.wrap($p).within(() => {
          cy.get('.price del').should('exist')
          cy.get('.price ins').should('exist')
        })
      }
    })
  })
})