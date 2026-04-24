describe('My Account - Registro - Cenário 01: Criar conta', () => {
  it('Deve registrar uma nova conta com sucesso', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL()

    // Passo 2: Clique no menu "My Account"
    cy.clicarNoMenuMyAccount()

    // Passo 3 e 4: Preencher email (único) e senha
    cy.preencherEmailUnico()
    cy.preencherSenhaRegistro('Senha@123456789')

    // Passo 5: Clique em Registrar
    cy.clicarRegistrar()

    // Passo 6: Verificar registro com sucesso
    cy.verificarRegistroSucesso()
    // Verificar texto descritivo do dashboard
    cy.verificarTextoDashboard('From your account dashboard you can view your recent orders, manage your shipping and billing addresses and edit your password and account details.')
  })
})
