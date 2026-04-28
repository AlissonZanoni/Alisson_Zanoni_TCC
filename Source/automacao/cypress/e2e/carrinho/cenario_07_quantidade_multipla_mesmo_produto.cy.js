describe('Carrinho - Cenário 07: Adicionar quantidade maior de um mesmo produto', () => {
  it('Deve consolidar múltiplas adições do mesmo produto em quantidade 2', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarMultiplasQuantidadesMesmoProduto()
  })
})