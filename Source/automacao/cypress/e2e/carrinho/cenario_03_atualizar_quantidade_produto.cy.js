describe('Carrinho - Cenário 03: Atualizar quantidade de um produto no carrinho', () => {
  it('Deve atualizar quantidade e recalcular totais', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarAtualizacaoQuantidade(3)
  })
})