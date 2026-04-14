describe('My Account - Login - Cenário 08: Checkbox Remember me visível', () => {
  it('Deve exibir o checkbox "Remember me" na página de login', () => {
    cy.acessarPaginaLogin()
    cy.verificarCheckboxRememberMeVisivel()
  })
})
