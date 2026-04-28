describe('Carrinho - Cenário 10: Atualizar quantidade para zero e remover', () => {
  it('Deve remover produto ao alterar quantidade para 0', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarRemocaoViaQuantidadeZero()
  })
})