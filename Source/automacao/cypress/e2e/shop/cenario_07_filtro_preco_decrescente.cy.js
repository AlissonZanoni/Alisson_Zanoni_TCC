describe('Cenário 07 - Validar filtro por Preço Decrescente', () => {
  it('Deve ordenar os produtos por preço decrescente', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Selecionar o filtro por Preço Decrescente e verificar reordenação
    cy.validarFiltroPrecoDecrescente();
  });
});