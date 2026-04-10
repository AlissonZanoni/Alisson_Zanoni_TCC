describe('My Account - Registro - Cenário 09: registro de senha forte', () => {
  it('Deve identificar senha forte (strong) e permitir registro', () => {
    const senha = 'Abcde1!2'
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()
    cy.preencherEmailUnico()
    cy.preencherSenhaRegistro('Teste@1234567abc')
    // verificar indicador de força: strong
    cy.verificarForcaSenha('strong')
    cy.clicarRegistrar()
    cy.verificarRegistroSucesso()
  })
})
