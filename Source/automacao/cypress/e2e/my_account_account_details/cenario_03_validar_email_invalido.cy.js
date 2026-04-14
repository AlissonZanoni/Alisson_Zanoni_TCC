describe('My Account - Account Details - Cenário 03: Validar que email inválido é rejeitado', () => {
  it('Deve rejeitar email inválido com validação HTML5', () => {
    cy.acessarPaginaAccountDetails()
    cy.limparCampoPorId('account_email')
    cy.preencherCampoPorId('account_email', 'emailinvalido')
    cy.verificarValidacaoEmailHTML5()
  })
})
