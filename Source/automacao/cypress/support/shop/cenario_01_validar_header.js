// ===================================
// Comandos Customizados - Cenário 01
// Validar header da página
// Funções Específicas do Cenário
// ===================================

// Passo 3: Validar header contendo Home/Shop e permitir retorno à Home
Cypress.Commands.add('validarHeader', () => {
  const baseUrl = 'https://practice.automationtesting.in';

  // 1. Isolar o contexto dentro da classe do WooCommerce para evitar pegar links do menu principal
  cy.get('.woocommerce-breadcrumb').within(() => {
    // Validar visibilidade e o atributo sem precisar clicar (mais rápido)
    cy.get('a')
      .contains('Home')
      .should('be.visible')
      .and('have.attr', 'href', baseUrl);
  });

  // 2. Executar o clique para validar o redirecionamento real
  cy.get('.woocommerce-breadcrumb a').contains('Home').click();

  // 3. Validar a URL de destino
  // Usamos 'eq' ou 'include'. Para a Home, o ideal é garantir que a URL seja exatamente a base.
  cy.url().should('eq', `${baseUrl}/`);
});