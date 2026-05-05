describe('My Account - Login - Cenário 08: Checkbox Remember me marcado por padrão', () => {
  it('Deve iniciar com checkbox Remember me marcado', () => {
    cy.acessarPaginaLogin()
    cy.verificarCheckboxRememberMeVisivel()

    // Valida a regra de negócio do estado inicial do checkbox.
    cy.get('#rememberme').should('be.checked')
  })
})
