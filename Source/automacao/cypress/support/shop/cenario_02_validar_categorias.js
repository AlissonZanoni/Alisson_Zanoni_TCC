// ===================================
// Comandos Customizados - Cenário 02
// Validar categorias dos produtos
// Funções Específicas do Cenário
// ===================================

// Passo 3: Validar exibição e filtragem por categoria
Cypress.Commands.add('validarCategoriasProdutos', () => {
  // Certifica que o widget de categorias está visível
  cy.get('.product-categories').should('be.visible')

  // Coletar cada item de categoria (href + count) e iterar visitando cada href
  cy.get('.product-categories li').then(($items) => {
    const categories = [...$items].map((li) => {
      const a = li.querySelector('a')
      const span = li.querySelector('span.count')
      const href = a ? a.href : null
      const countText = span ? span.textContent : '(0)'
      const count = parseInt(countText.replace(/\D/g, ''), 10) || 0
      return { href, count }
    })

    // Para cada categoria, visitar a página da categoria e validar a listagem igual ao count
    Cypress._.each(categories, (cat) => {
      if (!cat.href) return
      cy.visit(cat.href)
      cy.get('.products').should('be.visible')
      cy.get('.products .product').then(($prods) => {
        const found = $prods.length
        expect(found, `products count for ${cat.href}`).to.equal(cat.count)
      })
    })

    // Ao final, voltar para a página Shop para manter estado esperado pelos testes
    cy.visit('https://practice.automationtesting.in/')
    cy.contains('a', 'Shop').click()
    cy.get('.product-categories').should('be.visible')
  })
});