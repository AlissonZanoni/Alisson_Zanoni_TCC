// ===================================
// Comandos Específicos - Cenário 08: Checkbox Remember Me
// ===================================

// Comando para verificar se o checkbox "Remember me" está visível
Cypress.Commands.add('verificarCheckboxRememberMeVisivel', () => {
  cy.get('#rememberme').should('be.visible')
  cy.get('label[for="rememberme"]').should('be.visible').should('contain', 'Remember me')
})
