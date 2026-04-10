// ===================================
// Comandos Específicos - Cenário 02: Registro com email inválido
// ===================================

// Verificar erro de registro
Cypress.Commands.add('verificarRegistroErro', (mensagem) => {
  cy.get('.woocommerce-error').should('be.visible')
  if (mensagem) cy.get('.woocommerce-error').should('contain', mensagem)
})

// Validar mensagem de validação HTML5 do campo de email (checkValidity + validationMessage)
Cypress.Commands.add('validarEmailInvalidoHtml5', (expectedPattern) => {
  cy.get('#reg_email').then($input => {
    const el = $input[0]
    // campo deve ser inválido segundo validação HTML5
    expect(el.checkValidity()).to.equal(false)
    const msg = el.validationMessage || ''
    if (expectedPattern) {
      cy.wrap(msg).should('match', expectedPattern)
    } else {
      expect(msg).to.match(/@|endereço de email|email|valid/i)
    }
  })
})
// Comando específico do cenário 02 - Email inválido
Cypress.Commands.add('cenario_02_registro_email_invalido', () => {
  cy.navigateToRegistrationPage()
  cy.fillRegistrationForm('email-invalido', 'Senha@1234')
  cy.verifyRegistrationError()
})
