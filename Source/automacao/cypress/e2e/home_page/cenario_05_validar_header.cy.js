describe('Home Page - Cenário 05: Validar o header da página', () => {
  it('Deve verificar logo, links do header e seus redirecionamentos', () => {
    // Passo 1: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL()

    // Passos 2-8: Verificar exibição da logo e dos itens do header
    cy.verificarHeaderLogo()
    cy.verificarHeaderItensVisiveis()
    cy.verificarHeaderCarrinho()

    // Passo 9: Verificar que todos os itens redirecionam corretamente
    cy.verificarHeaderRedirecionamentos()

  })
})
