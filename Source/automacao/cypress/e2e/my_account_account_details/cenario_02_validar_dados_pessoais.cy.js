describe('My Account - Account Details - Cenário 02: Validar atualização de dados pessoais (first name e last name)', () => {
  it('Deve atualizar first name e last name com timestamp e validar que não estão vazios', () => {
    cy.acessarPaginaAccountDetails()
    cy.then(() => {
      // Gerar timestamp legível: DD-MM-YYYY-HH-MM-SS
      const agora = new Date()
      const dia = String(agora.getDate()).padStart(2, '0')
      const mes = String(agora.getMonth() + 1).padStart(2, '0')
      const ano = agora.getFullYear()
      const hora = String(agora.getHours()).padStart(2, '0')
      const minuto = String(agora.getMinutes()).padStart(2, '0')
      const segundo = String(agora.getSeconds()).padStart(2, '0')
      const timestamp = `${dia}-${mes}-${ano}-${hora}-${minuto}-${segundo}`
      
      cy.preencherCampoPorId('account_first_name', `Nome_${timestamp}`)
      cy.preencherCampoPorId('account_last_name', `Sobrenome_${timestamp}`)
    })
    cy.clicarBotaoSaveChanges()
    // Validar mensagem de sucesso
    cy.get('.woocommerce-message').should('be.visible').should('contain', 'Account details changed successfully.')
    // Aguarda para garantir que a atualização foi processada no backend
    cy.wait(15000)
    // Após salvar, redireciona para outra página, precisa voltar a Account Details
    cy.contains('a', 'Account Details').should('be.visible').click()
    cy.url().should('include', '/my-account/edit-account')
    cy.verificarCamposPreenchidos()
  })
})
