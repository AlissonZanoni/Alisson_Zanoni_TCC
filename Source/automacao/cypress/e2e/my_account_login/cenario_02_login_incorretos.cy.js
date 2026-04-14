describe('My Account - Login - Cenário 02: Login com credenciais incorretas', () => {
  it('Deve exibir mensagem de erro ao usar usuário/senha incorretos', () => {
    cy.acessarPaginaLogin()
    cy.fazerLoginComCredenciais('usuario_errado', 'senha_errada')
    cy.verificarMensagemErroLogin('The username usuario_errado is not registered on this site')
  })
})
