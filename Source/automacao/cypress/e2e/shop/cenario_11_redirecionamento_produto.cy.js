describe('Cenário 11 - Redirecionamento para o Produto', () => {
  it('Deve redirecionar para a página do produto ao clicar', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Clicar em um produto da lista e verificar redirecionamento
    cy.validarRedirecionamentoProduto();
  });
});