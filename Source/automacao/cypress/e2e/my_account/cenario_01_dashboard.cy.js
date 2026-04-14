describe('My Account - Área Logada - Cenário 01: Dashboard', () => {
  it('Deve exibir o Dashboard com informações da conta logada', () => {
    cy.acessarDashboard()
    cy.verificarDashboardExibido()
  })
})
