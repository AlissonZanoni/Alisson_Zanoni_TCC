describe('Home Page - Cenário 03: Imagens em "Arrivals" devem navegar corretamente', () => {
  
  it('Deve verificar se a imagem em Arrivals é clicável e navega para a página do Arrival selecionado', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL()
    
    // Passo 3: Clique em um "Arrival"
    cy.clicarNaImagemArrivals()
    
    // Passo 4: Verifique se está navegando para a página do Arrival selecionado
    cy.verificarNavegacaoParaPaginaArrivals()
  });

});
