describe('Cenário 09 - Validar Promoção', () => {
  it('Deve exibir produtos em promoção com preço antigo riscado', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3-5: Verificar apresentação de preço atual com o preço antigo riscado
    cy.validarPromocoes();
  });
});