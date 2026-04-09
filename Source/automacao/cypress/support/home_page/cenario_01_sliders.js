// ===================================
// Comandos Customizados - Cenário 01
// Página inicial com apenas três sliders
// Funções Específicas (não duplicadas em commands.js)
// ===================================

// Passo 3: Verifique se a página inicial possui a quantidade especificada de sliders
Cypress.Commands.add('verificarQuantidadeSliders', (expectedCount) => {
  // NextendSlider usa a classe .n2-ss-slide para cada slide
  cy.get('.n2-ss-slide').should('have.length', expectedCount);
});
