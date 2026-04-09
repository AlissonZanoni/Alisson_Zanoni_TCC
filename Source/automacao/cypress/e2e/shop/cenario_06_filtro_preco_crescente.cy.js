describe('Cenário 06 - Validar filtro por Preço Crescente', () => {
  it('Deve ordenar os produtos por preço crescente', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Selecionar o filtro por Preço Crescente e verificar reordenação
    cy.validarFiltroPrecoCrescente();
  });
});