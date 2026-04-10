describe('My Account - Registro - Cenário 04: Senha vazia', () => {
  it('Deve mostrar erro ao registrar com senha vazia', () => {
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()
    cy.preencherEmailUnico()
    // Regra de negócio: botão Register deve estar desabilitado quando senha não for informada
    cy.verificarBotaoRegisterDesabilitado()
  })
})
