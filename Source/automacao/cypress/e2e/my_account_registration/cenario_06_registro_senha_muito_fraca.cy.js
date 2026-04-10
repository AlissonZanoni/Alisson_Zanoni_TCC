describe('My Account - Registro - Cenário 06: registro de senha muito fraca', () => {
  it('Deve identificar senha muito fraca (short/bad)', () => {
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()
    cy.preencherEmailUnico()
    cy.preencherSenhaRegistro('Abc')
    // verificar indicador de força: short (Very weak) ou bad
    cy.verificarForcaSenha('short')
  })
})
