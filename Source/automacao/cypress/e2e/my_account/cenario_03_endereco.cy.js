describe('My Account - Área Logada - Cenário 03: Visualizar Endereço', () => {
  it('Deve redirecionar para a página de endereços', () => {
    cy.acessarDashboard()
    cy.clicarNoLinkAddresses()
    cy.verificarPaginaEndereco()
  })
})
