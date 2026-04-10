describe('My Account - Registro - Cenário 03: Email vazio', () => {
  it('Deve mostrar erro ao registrar com email vazio', () => {
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()
    cy.preencherEmailRegistro('')
    cy.preencherSenhaRegistro('Senha@1234')
    // Regra de negócio: botão Register deve estar desabilitado quando email estiver vazio
    cy.verificarBotaoRegisterDesabilitado()
  })
})
