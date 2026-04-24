// ===================================
// Comandos Específicos - Cenário 01: Validar Estrutura da Página de Addresses
// ===================================

// Verificar estrutura completa da página de Addresses
// Usado em: Cenário 1
Cypress.Commands.add('verificarEstruturaPaginaAddresses', () => {
  // Verificar seção Billing Address
  cy.get('.u-column1.col-1.woocommerce-Address').should('be.visible')
  cy.get('.u-column1.col-1.woocommerce-Address').find('h3').should('contain', 'Billing Address')
  cy.get('.u-column1.col-1.woocommerce-Address').find('address').should('contain', 'You have not set up this type of address yet.')
  cy.get('.u-column1.col-1.woocommerce-Address').find('a.edit').should('be.visible')
  
  // Verificar seção Shipping Address
  cy.get('.u-column2.col-2.woocommerce-Address').should('be.visible')
  cy.get('.u-column2.col-2.woocommerce-Address').find('h3').should('contain', 'Shipping Address')
  cy.get('.u-column2.col-2.woocommerce-Address').find('address').should('contain', 'You have not set up this type of address yet.')
  cy.get('.u-column2.col-2.woocommerce-Address').find('a.edit').should('be.visible')
})
