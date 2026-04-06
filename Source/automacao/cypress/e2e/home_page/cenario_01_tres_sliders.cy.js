describe('Home Page - Cenário 01: Página inicial com apenas três sliders', () => {
  
  it('Deve verificar se a página inicial possui exatamente três sliders', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL()
    
    // Passo 3: Clique no menu "Shop"
    cy.clicarNoMenuShop()
    
    // Passo 4: Clique no botão do menu "Home"
    cy.clicarNoMenuHome()
    
    // Passo 5: Verifique se a página inicial possui apenas três sliders
    cy.verificarQuantidadeSliders(3)
  
  });

});
