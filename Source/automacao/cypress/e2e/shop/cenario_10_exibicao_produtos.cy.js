describe('Cenário 10 - Exibição dos Produtos', () => {
  it('Deve exibir os produtos corretamente', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3-6: Verificar título, preço e botão adicionar ao carrinho em cada produto
    cy.validarExibicaoProdutos();
  });
});