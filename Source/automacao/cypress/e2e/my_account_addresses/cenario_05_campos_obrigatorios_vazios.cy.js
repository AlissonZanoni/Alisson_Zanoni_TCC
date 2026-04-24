describe('My Account - Addresses - Cenário 05: Campos obrigatórios vazios (validações)', () => {
  it('Deve exibir mensagens de validação para campos obrigatórios vazios', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.limparCamposBillingAddress()
    cy.clicarBotaoSaveAddress()
    cy.verificarValidacaoCamposObrigatorios()
  })
})
