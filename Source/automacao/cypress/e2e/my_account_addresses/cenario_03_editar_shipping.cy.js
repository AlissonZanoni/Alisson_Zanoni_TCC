describe('My Account - Addresses - Cenário 03: Validar navegação - Editar Shipping Address', () => {
  it('Deve redirecionar para a página de edição de Shipping Address', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarShippingAddress()
    cy.verificarNavegacaoShippingAddress()
  })
})
