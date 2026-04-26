describe('My Account - Addresses - Cenário 15: Salvar Shipping sem alterações', () => {
  it('Deve responder adequadamente ao salvar Shipping Address sem fazer alterações', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarShippingAddress()
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
