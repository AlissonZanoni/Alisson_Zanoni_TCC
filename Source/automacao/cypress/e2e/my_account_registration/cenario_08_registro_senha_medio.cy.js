describe('My Account - Registro - Cenário 08: registro de senha medio', () => {
  it('Deve identificar senha com força média (good/medium)', () => {
    const senha = 'abcdefg'
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()
    cy.preencherEmailUnico()
    cy.preencherSenhaRegistro('Teste@1234')
    // verificar indicador de força: good (Medium)
    cy.verificarForcaSenha('good')
    cy.clicarRegistrar()
    cy.verificarRegistroSucesso()
  })
})
