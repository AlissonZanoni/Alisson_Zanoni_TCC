describe('My Account - Login - Cenário 05: Login com usuário e senha vazios', () => {
  it('Deve exibir erro ao tentar logar sem usuário e sem senha', () => {
    cy.acessarPaginaLogin()
    cy.fazerLoginSemUsuarioESenha()
    cy.verificarMensagemErroLogin('Username is required')
  })
})
