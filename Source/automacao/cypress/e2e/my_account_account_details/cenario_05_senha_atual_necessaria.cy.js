describe('My Account - Account Details - Cenário 05: Validar que senha atual é necessária para mudança de senha', () => {
  it('Deve rejeitar mudança de senha sem preencher senha atual', () => {
    cy.acessarPaginaAccountDetails()
    cy.preencherCampoPorId('password_1', 'NovaSenha@123')
    cy.preencherCampoPorId('password_2', 'NovaSenha@123')
    cy.clicarBotaoSaveChanges()
    cy.verificarMensagemErroSenhaAtualNecessaria()
  })
})
