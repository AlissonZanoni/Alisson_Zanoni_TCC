describe('My Account - Addresses - Cenário 10: Salvar sem alterações', () => {
  it('Deve salvar sem erros quando o formulário não é alterado', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
