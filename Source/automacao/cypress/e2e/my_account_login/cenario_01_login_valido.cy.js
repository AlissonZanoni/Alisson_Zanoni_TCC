describe('My Account - Login - Cenário 01: Login com credenciais válidas', () => {
  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    cy.acessarPaginaLogin()
    cy.fazerLoginComCredenciais('registro_1776123104744@example.com', 'Senha@1234')
    cy.verificarLoginComSucesso()
  })
})
