// ===================================
// Comandos Customizados - Cenário 11
// Validar redirecionamento para página do produto
// Funções Específicas do Cenário
// ===================================

// Passo 3-4: Clicar no produto e verificar redirecionamento para a página do produto
Cypress.Commands.add('validarRedirecionamentoProduto', () => {
  // Itera por todos os links dos produtos na listagem e valida o redirecionamento
  cy.get('.products .product a.woocommerce-LoopProduct-link').then(($links) => {
    const hrefs = [...$links].map((a) => a.href)

    Cypress._.each(hrefs, (href) => {
      const pathname = new URL(href).pathname
      // Visita a página do produto diretamente e valida o pathname
      cy.visit(href)
      cy.location('pathname').should('include', pathname)
      cy.get('.product_title').should('be.visible')

      // Volta para a página Shop e aguarda a listagem estar visível antes da próxima iteração
      cy.visit('https://practice.automationtesting.in/shop/')
      cy.get('.products').should('be.visible')
    })
  })
});