describe('Carrinho - Cenário 12: Validar limite máximo de produtos no carrinho', () => {
  it('Deve validar que o carrinho não pode ter mais de 3 produtos (regra de negócio artificial)', () => {
    // Adicionar 4 produtos ao carrinho para forçar falha
    cy.adicionarProdutoAoCarrinho(0)
    cy.adicionarProdutoAoCarrinho(1)
    cy.adicionarProdutoAoCarrinho(2)
    cy.adicionarProdutoAoCarrinho(3)
    
    // Acessar carrinho
    cy.acessarPaginaCarrinho()
    
    // Validar limite máximo (este teste deve falhar pois o site permite mais de 3 produtos)
    cy.validarLimiteMaximoProdutosCarrinho(3)
  })
})