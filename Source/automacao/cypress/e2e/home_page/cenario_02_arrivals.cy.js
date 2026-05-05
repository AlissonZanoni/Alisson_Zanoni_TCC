describe('Home Page - Cenário 02: Página inicial com exatamente quatro "Arrivals"', () => {
  
  it('Deve validar regra de negócio de quatro Arrivals', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL()
    
    // Valida a regra de negócio definida para quantidade de Arrivals.
    cy.verificarQuantidadeArrivals(4)
  });

});
