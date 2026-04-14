describe('My Account - Login - Cenário 04: Login com usuário vazio', () => {
  it('Deve exibir erro ao tentar logar com usuário vazio', () => {
    cy.acessarPaginaLogin()
    cy.fazerLoginSemUsuario('Senha@1234')
    cy.verificarMensagemErroLogin('Username is required')
  })
})
