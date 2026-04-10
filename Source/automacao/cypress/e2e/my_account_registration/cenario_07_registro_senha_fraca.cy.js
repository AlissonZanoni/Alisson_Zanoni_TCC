describe('My Account - Registro - Cenário 07: registro de senha fraca', () => {
  it('Deve identificar senha fraca (bad)', () => {
    const senha = 'Ab1!23'
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()
    cy.preencherEmailUnico()
    cy.preencherSenhaRegistro(senha)
    // verificar indicador de força: bad
    cy.verificarForcaSenha('bad')
  })
})
