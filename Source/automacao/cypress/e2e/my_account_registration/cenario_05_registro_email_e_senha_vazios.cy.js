describe('My Account - Registro - Cenário 05: Email e senha vazios', () => {
  it('Deve mostrar erro ao registrar com email e senha vazios', () => {
    // Passo 1 e 2: abrir página e My Account
    cy.abrirNavigadorEInserirURL()
    cy.clicarNoMenuMyAccount()

    // Não interagir com campos — verificar estado do botão ao abrir a página
    cy.verificarBotaoRegisterDesabilitado()
  })
})
