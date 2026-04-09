describe('Cenário 01 - Validar o header da página', () => {
  it('Deve exibir o header corretamente', () => {
    // Passo 1 e 2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL();

    // Passo 1.1: Navegar até o menu "Shop"
    cy.clicarNoMenuShop();

    // Passo 3: Visualizar o header contendo Home/Shop e permitir retorno para Home
    cy.validarHeader();
  });
});