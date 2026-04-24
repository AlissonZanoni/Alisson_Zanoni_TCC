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
