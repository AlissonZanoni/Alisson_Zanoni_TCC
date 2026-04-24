describe('My Account - Addresses - Cenário 01: Validar estrutura da página de Addresses', () => {
  it('Deve validar que a página contém as seções Billing e Shipping Address com botões Edit', () => {
    cy.acessarPaginaAddresses()
    cy.verificarEstruturaPaginaAddresses()
  })
})
