describe('My Account - Addresses - Cenário 08: Troca de país atualiza lista de estados', () => {
  it('Deve atualizar a lista de estados ao trocar de país', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.selecionarPais('Australia')
    cy.verificarListaEstadosAtualizada()
    cy.selecionarPrimeiroEstado()
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
