describe('My Account - Account Details - Cenário 04: Erro ao mudar senha com confirmação diferente', () => {
  it('Deve rejeitar mudança de senha com confirmação diferente', () => {
    cy.acessarPaginaAccountDetails()
    cy.preencherCampoPorId('password_current', 'Senha@1234')
    cy.preencherCampoPorId('password_1', 'NovaSenha@123')
    cy.preencherCampoPorId('password_2', 'OutraSenha@456')
    cy.clicarBotaoSaveChanges()
    cy.verificarMensagemErroSenhasDiferentes()
  })
})
