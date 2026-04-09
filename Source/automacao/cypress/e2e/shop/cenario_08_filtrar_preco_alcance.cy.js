describe('Cenário 08 - Filtrar por Alcance de Preço', () => {
  it('Deve filtrar os produtos dentro do alcance de preço', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3-6: Ajustar alcance de preço e aplicar filtro
    cy.filtrarPorAlcanceDePreco(100, 200);
  });
});