describe('My Account - Addresses - Cenário 02: Validar navegação - Editar Billing Address', () => {
  it('Deve redirecionar para a página de edição de Billing Address', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.verificarNavegacaoBillingAddress()
  })
})
