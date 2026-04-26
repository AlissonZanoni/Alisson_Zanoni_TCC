describe('My Account - Addresses - Cenário 09: Campos opcionais aceitos (Company, Address 2)', () => {
  it('Deve aceitar e salvar campos opcionais Company e Address 2', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.preencherBillingAddressComOpcionais('João', 'Silva', 'Empresa Teste', 'Apt 123', 'registro_teste@example.com', '+5511999999999', 'Brazil', 'Rua Indaial', 'Criciúma', 'Santa Catarina', '88815650')
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
