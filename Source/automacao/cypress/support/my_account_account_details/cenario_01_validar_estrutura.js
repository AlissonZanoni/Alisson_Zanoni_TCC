// ===================================
// Comandos Específicos - Cenário 01: Validar Estrutura do Formulário
// ===================================

// Verificar estrutura completa do formulário
// Usado em: Cenário 1
Cypress.Commands.add('verificarEstruturacCompleteForm', () => {
  cy.get('#account_first_name').should('be.visible')
  cy.get('#account_last_name').should('be.visible')
  cy.get('#account_email').should('be.visible')
  cy.contains('legend', 'Password Change').should('be.visible')
  cy.get('#password_current').should('be.visible')
  cy.get('#password_1').should('be.visible')
  cy.get('#password_2').should('be.visible')
  cy.get('input[name="save_account_details"]').should('be.visible')
})
