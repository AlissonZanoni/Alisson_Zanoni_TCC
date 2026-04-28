describe('Carrinho - Cenário 11: Prosseguir para checkout logado', () => {
  it('Deve redirecionar para página de checkout quando logado', () => {
    // Fazer login primeiro
    cy.acessarPaginaLogin()
    cy.fazerLoginComCredenciais('registro_1776123104744@example.com', 'Senha@1234')
    cy.verificarLoginComSucesso()
    
    // Adicionar produto ao carrinho
    cy.adicionarProdutoAoCarrinho(0)
    cy.acessarPaginaCarrinho()
    
    // Clicar em checkout e validar
    cy.clicarBotaoProceedToCheckout()
    cy.url().should('include', 'checkout')
    
    // Validar que produtos estão listados no checkout
    cy.get('table.shop_table, div.woocommerce-checkout-review-order-table')
      .should('be.visible')
  })
})