describe('Carrinho - Cenário 01: Adicionar um produto ao carrinho (fluxo feliz)', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarProdutoAdicionadoAoCarrinho()
  })
})