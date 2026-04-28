describe('Carrinho - Cenário 04: Remover um produto do carrinho', () => {
  it('Deve remover o produto e exibir carrinho vazio', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarRemocaoProduto()
  })
})