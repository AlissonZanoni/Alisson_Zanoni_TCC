describe('Cenário 03 - Validar filtro por Popularidade', () => {
  it('Deve ordenar os produtos por popularidade', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Selecionar o filtro por Popularidade e verificar reordenação
    cy.validarFiltroPopularidade();
  });
});