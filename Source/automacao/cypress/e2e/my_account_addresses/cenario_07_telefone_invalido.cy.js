describe('My Account - Addresses - Cenário 07: Telefone inválido', () => {
  it('Deve rejeitar telefone inválido no formulário Billing Address', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.preencherBillingAddressComTelefoneInvalido('João', 'Silva', 'registro_teste@example.com', 'abc123', 'Brazil', 'Rua Indaial', 'Criciúma', 'Santa Catarina', '88815650')
    cy.clicarBotaoSaveAddress()
    cy.verificarValidacaoTelefoneInvalido()
  })
})
