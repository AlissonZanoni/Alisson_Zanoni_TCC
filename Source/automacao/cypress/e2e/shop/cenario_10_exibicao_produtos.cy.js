describe('Cenário 10 - Exibição dos Produtos com destaque de promoção na primeira fileira', () => {
  it('Deve exibir produtos em promoção na primeira fileira', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3-6: Verificar título, preço e botão adicionar ao carrinho em cada produto
    cy.validarExibicaoProdutos();

    // Regra de negócio: produtos em promoção devem aparecer na primeira fileira.
    cy.get('.products .product').then(($products) => {
      const products = Array.from($products)
      expect(products.length, 'quantidade de produtos na listagem').to.be.greaterThan(0)

      const firstRowTop = products[0].getBoundingClientRect().top
      const tolerance = 10

      const firstRowProducts = products.filter((product) => {
        const top = product.getBoundingClientRect().top
        return Math.abs(top - firstRowTop) <= tolerance
      })

      const firstRowSet = new Set(firstRowProducts)
      const saleProducts = products.filter((product) => product.querySelector('.onsale'))

      expect(saleProducts.length, 'quantidade de produtos em promoção').to.be.greaterThan(0)

      const salesOutsideFirstRow = saleProducts.filter((product) => !firstRowSet.has(product))
      expect(salesOutsideFirstRow.length, 'produtos em promoção fora da primeira fileira').to.equal(0)
    })
  });
});