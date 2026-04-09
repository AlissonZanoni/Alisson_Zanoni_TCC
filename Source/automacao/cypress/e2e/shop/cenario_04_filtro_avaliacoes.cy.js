describe('Cenário 04 - Validar filtro por Avaliações', () => {
  it('Deve ordenar os produtos por avaliações', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Selecionar o filtro por Avaliações e verificar reordenação
    cy.validarFiltroAvaliacoes();
  });
});