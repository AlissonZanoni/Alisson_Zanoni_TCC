describe('Cenário 05 - Validar filtro por Novidades', () => {
  it('Deve ordenar os produtos por novidades', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Selecionar o filtro por Novidades e verificar reordenação
    cy.validarFiltroNovidades();
  });
});