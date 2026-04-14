describe('My Account - Login - Cenário 06: Senha deve ser mascarada', () => {
  it('Campo de senha deve mascarar caracteres', () => {
    cy.acessarPaginaLogin()
    cy.verificarCampoSenhaMascarado()
  })
})
