describe('Carrinho - Cenário 08: Aplicar código de cupom inválido', () => {
  it('Deve exibir erro ao aplicar cupom inválido', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarAplicacaoCupomInvalido('CODIGOINVALIDO')
  })
})