describe('My Account - Login - Cenário 07: Diferenciação maiúsculas/minúsculas', () => {
  it('Deve falhar ao alterar caixa de usuário ou senha (case-sensitive)', () => {
    cy.acessarPaginaLogin()
    // Use a mesma massa do cenário 01 mas com case alterado
    cy.fazerLoginComCredenciais('REGISTRO_1776123104744@EXAMPLE.COM', 'SENHA@1234')
    cy.verificarMensagemErroLogin('The password you entered for the username REGISTRO_1776123104744@EXAMPLE.COM is incorrect')
  })
})
