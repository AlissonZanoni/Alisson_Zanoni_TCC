describe('Carrinho - Cenário 05: Validar cálculo do total final', () => {
  it('Deve validar que Total = Subtotal + Tax', () => {
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    cy.validarCalculoTotalFinal()
  })
})