// ===================================
// Comandos Específicos - Cenário 02: Validar Atualização de Dados Pessoais
// ===================================

// Verificar que campos de dados pessoais não estão vazios
// Usado em: Cenário 2 (após alteração)
Cypress.Commands.add('verificarCamposPreenchidos', () => {
  cy.get('#account_first_name').then(($input) => {
    const value = $input.val()
    cy.log(`First Name Value: "${value}"`)
    expect(value).to.not.be.empty
  })
  cy.get('#account_last_name').then(($input) => {
    const value = $input.val()
    cy.log(`Last Name Value: "${value}"`)
    expect(value).to.not.be.empty
  })
  cy.get('#account_email').then(($input) => {
    const value = $input.val()
    cy.log(`Email Value: "${value}"`)
    expect(value).to.not.be.empty
  })
})
