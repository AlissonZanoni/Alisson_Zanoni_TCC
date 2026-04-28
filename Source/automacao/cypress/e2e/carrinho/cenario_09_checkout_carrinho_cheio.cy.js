describe('Carrinho - Cenário 09: Prosseguir para checkout com carrinho cheio', () => {
  it('Deve redirecionar para página de checkout com produtos', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarProceedToCheckoutComProdutos()
  })
})