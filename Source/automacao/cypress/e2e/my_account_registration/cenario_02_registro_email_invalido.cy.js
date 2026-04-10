describe('My Account - Registro - Cenário 02: Email inválido', () => {
  it('Deve mostrar erro ao registrar com email inválido', () => {
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()
    cy.preencherEmailRegistro('email-invalido')
    cy.preencherSenhaRegistro('Senha@1234')
    cy.clicarRegistrar()
    // Validação HTML5 via comando de suporte
    cy.validarEmailInvalidoHtml5(/@|endereço de email|email|valid/i)
  })
})
