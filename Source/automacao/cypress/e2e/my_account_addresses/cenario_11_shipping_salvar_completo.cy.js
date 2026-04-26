describe('My Account - Addresses - Cenário 11: Salvar Shipping Address com sucesso (fluxo feliz)', () => {
  it('Deve salvar Shipping Address com todos os dados corretos', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarShippingAddress()
    cy.preencherShippingAddressCompleto('Maria', 'Santos', 'Brazil', 'Av Paulista, 1000', 'São Paulo', 'São Paulo', '01311100')
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
