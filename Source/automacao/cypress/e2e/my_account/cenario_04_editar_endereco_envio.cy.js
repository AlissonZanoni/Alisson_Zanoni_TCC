describe('My Account - Área Logada - Cenário 04: Editar Endereço de Envio', () => {
  it('Deve redirecionar para a página de editar endereço', () => {
    cy.acessarDashboard()
    cy.clicarNoLinkAddresses()
    cy.verificarPaginaEndereco()
  })
})
