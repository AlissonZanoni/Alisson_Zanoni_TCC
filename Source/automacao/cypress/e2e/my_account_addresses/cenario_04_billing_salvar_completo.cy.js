describe('My Account - Addresses - Cenário 04: Salvar Billing Address com sucesso (fluxo feliz)', () => {
  it('Deve salvar endereço de faturamento com todos os dados preenchidos', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.preencherBillingAddressCompleto('João', 'Silva', 'registro_teste@example.com', '+5511999999999', 'Brazil', 'Rua indaial', 'Cricíuma', 'Santa Catarina', '88815-650')
    cy.clicarBotaoSaveAddress()
    cy.verificarMensagemSucesso()
  })
})
