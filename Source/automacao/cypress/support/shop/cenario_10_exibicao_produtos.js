// ===================================
// Comandos Customizados - Cenário 10
// Validar exibição dos produtos (título, preço e botão Add to basket)
// ===================================

Cypress.Commands.add('validarExibicaoProdutos', () => {
  // Certifica que há pelo menos um produto listado
  cy.get('.products .product').should('have.length.gte', 1)
  // Para cada produto na listagem, valida título, preço, imagem e botão sem navegar para a página de detalhe
  cy.get('.products .product').each(($li) => {
    cy.wrap($li).within(() => {
      // Título (h3) visível e não vazio
      cy.get('h3').should('be.visible').invoke('text').then((t) => {
        expect(t.trim().length, 'product title not empty').to.be.gte(1)
      })

      // Preço exibido: aceita preço simples ou com del/ins (promo)
      cy.get('.price').should('exist').invoke('text').then((txt) => {
        expect(txt.replace(/\s+/g, ''), 'price contains digits').to.match(/\d/)
      })

      // Imagem do produto com atributo src e alt/title
      cy.get('img').should('have.attr', 'src').and('match', /https?:\/\//)
      cy.get('img').then(($img) => {
        const alt = $img.attr('alt') || ''
        const title = $img.attr('title') || ''
        expect((alt + title).trim().length, 'image alt/title present').to.be.gte(1)
      })

      // Botão para adicionar ao carrinho: âncora com rel="nofollow" e texto esperado
      cy.get('a.add_to_cart_button[rel="nofollow"]').should('exist').and('be.visible').invoke('text').then((txt) => {
        expect(txt.trim(), 'add to basket text').to.match(/add to basket|add to cart/i)
      })
    })
  })
})
