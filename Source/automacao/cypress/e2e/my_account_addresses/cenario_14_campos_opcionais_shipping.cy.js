describe('My Account - Addresses - Cenário 14: Campos opcionais aceitos - Shipping', () => {
  it('Deve aceitar e salvar campos opcionais (Company, Address 2) no Shipping', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarShippingAddress()
    cy.preencherShippingAddressComOpcionais('Maria', 'Santos', 'Tech Solutions', 'Apto 502', 'Brazil', 'Av Paulista, 1000', 'São Paulo', 'São Paulo', '01311100')
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
