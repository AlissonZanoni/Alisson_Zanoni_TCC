describe('Cenário 02 - Validar as categorias dos produtos', () => {
  it('Deve exibir as categorias corretamente', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Visualizar categorias e verificar filtragem por cada categoria
    cy.validarCategoriasProdutos();
  });
});