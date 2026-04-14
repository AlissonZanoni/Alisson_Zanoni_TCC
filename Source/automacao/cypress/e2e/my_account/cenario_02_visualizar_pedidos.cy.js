describe('My Account - Área Logada - Cenário 02: Visualizar Pedidos', () => {
  it('Deve redirecionar para a página de pedidos', () => {
    cy.acessarDashboard()
    cy.clicarNoLinkOrders()
    cy.verificarPaginaOrders()
  })
})
