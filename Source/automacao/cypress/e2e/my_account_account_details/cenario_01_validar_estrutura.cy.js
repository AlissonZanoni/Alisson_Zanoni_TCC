describe('My Account - Account Details - Cenário 01: Validar estrutura do formulário', () => {
  it('Deve validar que o formulário contém todos os campos necessários', () => {
    cy.acessarPaginaAccountDetails()
    cy.verificarEstruturacCompleteForm()
  })
})
