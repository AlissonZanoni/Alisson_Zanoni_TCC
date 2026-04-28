describe('Carrinho - Cenário 06: Adicionar múltiplos produtos ao carrinho', () => {
  it('Deve adicionar dois produtos diferentes ao carrinho', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.adicionarProdutoAoCarrinho(1)
    cy.acessarPaginaCarrinho()
    cy.validarMultiplosProdutos()
  })
})