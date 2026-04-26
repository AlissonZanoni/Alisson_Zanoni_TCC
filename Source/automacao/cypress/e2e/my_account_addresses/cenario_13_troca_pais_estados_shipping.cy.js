describe('My Account - Addresses - Cenário 13: Troca de país atualiza lista de estados - Shipping', () => {
  it('Deve atualizar a lista de estados ao trocar de país no Shipping', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarShippingAddress()
    cy.selecionarPaisShipping('Australia')
    cy.verificarListaEstadosAtualizadaShipping()
    cy.selecionarPrimeiroEstadoShipping()
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
