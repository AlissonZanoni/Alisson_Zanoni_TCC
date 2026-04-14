describe('My Account - Login - Cenário 03: Login com senha vazia', () => {
  it('Deve exibir erro ao tentar logar com senha vazia', () => {
    cy.acessarPaginaLogin()
    cy.fazerLoginSemSenha('registro_1776123104744@example.com')
    cy.verificarMensagemErroLogin('Password is required')
  })
})
