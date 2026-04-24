describe('My Account - Addresses - Cenário 06: Email inválido', () => {
  it('Deve rejeitar email inválido no formulário Billing Address', () => {
    cy.acessarPaginaAddresses()
    cy.clicarEditarBillingAddress()
    cy.preencherBillingAddressComEmailInvalido('João', 'Silva', 'emailinvalido', '+5511999999999', 'Brazil', 'Rua Indaial', 'Criciúma', 'Santa Catarina', '88815650')
    cy.clicarBotaoSaveAddress()
    cy.verificarValidacaoEmailInvalido()
  })
})
