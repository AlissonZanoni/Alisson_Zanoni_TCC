describe('My Account - Addresses - Cenário 12: Campos obrigatórios vazios - Shipping (validações)', () => {
  it('Deve exibir mensagens de validação para campos obrigatórios vazios no Shipping', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarShippingAddress()
    cy.limparCamposShippingAddress()
    cy.clicarBotaoSaveAddress()
    cy.verificarValidacaoCamposObrigatoriosShipping()
  })
})
