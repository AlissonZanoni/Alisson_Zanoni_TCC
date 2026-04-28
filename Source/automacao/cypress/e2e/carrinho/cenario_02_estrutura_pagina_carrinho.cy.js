describe('Carrinho - Cenário 02: Validar estrutura da página do carrinho', () => {
  it('Deve validar que todas as colunas e seções obrigatórias estão presentes', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarEstruturaPaginaCarrinho()
  })
})