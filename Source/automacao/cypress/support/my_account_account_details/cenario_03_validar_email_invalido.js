// ===================================
// Comandos Específicos - Cenário 03: Validar Email Inválido
// ===================================

// Verificar que email inválido não passa na validação HTML5
// Usado em: Cenário 3
Cypress.Commands.add('verificarValidacaoEmailHTML5', () => {
  cy.get('#account_email').then(($email) => {
    const el = $email[0]
    expect(el.checkValidity()).to.equal(false)
  })
})
