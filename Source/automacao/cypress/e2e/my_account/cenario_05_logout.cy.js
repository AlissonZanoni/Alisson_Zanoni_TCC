describe('My Account - Área Logada - Cenário 05: Logout', () => {
  it('Deve fazer logout com sucesso', () => {
    cy.acessarDashboard()
    cy.clicarNoBotaoLogout()
    cy.wait(1000)
    cy.verificarCamposLoginVisiveis()
  })
})
