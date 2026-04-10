// ===================================
// Comandos Específicos - Cenário 01: Criar conta
// ===================================

// Verificar sucesso no registro
Cypress.Commands.add('verificarRegistroSucesso', () => {
  cy.contains(/Logout|Dashboard|Hello/i).should('be.visible')
})

// Verificar texto do dashboard após registro
Cypress.Commands.add('verificarTextoDashboard', (textoEsperado) => {
  cy.contains(textoEsperado).should('be.visible')
})
// Comando específico do cenário 01 - Criar conta
Cypress.Commands.add('cenario_01_registro', () => {
  cy.navigateToRegistrationPage()
  cy.generateUniqueEmail().then((email) => {
    const senha = 'Senha@1234'
    cy.fillRegistrationForm(email, senha)
    cy.verifyRegistrationSuccess()
  })
})
