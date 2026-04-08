describe('Home Page - Cenário 04: Verificação do preço e botão ADD TO BASKET no Arrival', () => {
  
  it('Deve verificar título, preço e botão ADD TO BASKET em Arrivals', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL()
    
    // Passo 3: Verifica título dos Arrivals
    cy.verificarTituloArrival()
    
    // Passo 4: Verifica preço dos Arrivals
    cy.verificarPrecoArrival()
    
    // Passo 5: Verifica botão ADD TO BASKET visível e clicável
    cy.verificarAddToBasketVisivel()
  });

});
