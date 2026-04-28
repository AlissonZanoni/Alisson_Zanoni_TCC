// ===================================
// Comandos Específicos - Cenários do Carrinho de Compras
// ===================================

// Cenário 01: Adicionar um produto ao carrinho (fluxo feliz)
Cypress.Commands.add('validarProdutoAdicionadoAoCarrinho', () => {
  // Passo 6: Verificar que o produto foi adicionado ao carrinho
  cy.get('table.shop_table tbody tr').should('have.length.greaterThan', 0)
  
  // Passo 7: Validar que a quantidade do produto é 1
  cy.get('input[type="number"]').first()
    .invoke('val')
    .should('equal', '1')
  
  // Passo 8: Validar que o preço unitário está correto
  cy.get('td.product-price').first()
    .invoke('text')
    .should('not.be.empty')
    .should('include', '\u20b9')
  
  // Passo 9: Validar que o total do item está correto
  cy.get('td.product-subtotal').first()
    .invoke('text')
    .should('not.be.empty')
    .should('include', '\u20b9')
})

// Cenário 02: Validar estrutura da página do carrinho
Cypress.Commands.add('validarEstruturaPaginaCarrinho', () => {
  cy.verificarEstruturaTabelaCarrinho()
  cy.verificarSecaoBasketTotals()
  
  // Validar presença dos botões
  cy.get('input[name="apply_coupon"]').should('be.visible')
  cy.get('input[name="update_cart"]').should('be.visible')
  cy.get('a.checkout-button, button.checkout-button').should('be.visible')
})

// Cenário 03: Atualizar quantidade e validar recálculo
Cypress.Commands.add('validarAtualizacaoQuantidade', (novaQuantidade = 3) => {
  // Obter preço unitário antes da alteração
  cy.get('table.shop_table tbody tr').first()
    .find('td.product-price')
    .invoke('text')
    .then((priceText) => {
      const priceUnitario = parseFloat(priceText.replace(/[^\d.,]/g, ''))
      
      // Atualizar quantidade
      cy.atualizarQuantidadeProduto(novaQuantidade)
      cy.clicarBotaoUpdateBasket()
      
      // Validar que quantidade foi atualizada
      cy.obterQuantidadeProduto(0).should('equal', novaQuantidade.toString())
      
      // Validar que o total foi recalculado
      cy.obterTotalItemCarrinho(0).then((totalText) => {
        const totalCalculado = parseFloat(totalText)
        const totalEsperado = priceUnitario * novaQuantidade
        expect(totalCalculado).to.equal(totalEsperado)
      })
    })
})

// Cenário 04: Remover produto e validar lista
Cypress.Commands.add('validarRemocaoProduto', () => {
  cy.removerProdutoDoCarrinho(0)
  cy.wait(1000)
  cy.verificarCarrinhoVazio()
})

// Cenário 05: Validar cálculo do total final
Cypress.Commands.add('validarCalculoTotalFinal', () => {
  cy.obterSubtotal().then((subtotal) => {
    cy.obterTax().then((tax) => {
      cy.obterTotal().then((total) => {
        const subtotalNum = parseFloat(subtotal)
        const taxNum = parseFloat(tax)
        const totalNum = parseFloat(total)
        const totalEsperado = subtotalNum + taxNum
        
        // Validar que Total = Subtotal + Tax (com margem de erro para arredondamento)
        expect(totalNum).to.be.closeTo(totalEsperado, 0.5)
      })
    })
  })
})

// Cenário 06: Adicionar múltiplos produtos e validar
Cypress.Commands.add('validarMultiplosProdutos', () => {
  // Verificar que há mais de um produto no carrinho
  cy.verificarQuantidadeProdutosNoCarrinho(2)
})

// Cenário 07: Adicionar múltiplas quantidades do mesmo produto
Cypress.Commands.add('validarMultiplasQuantidadesMesmoProduto', () => {
  // Verificar que ainda há apenas um produto na tabela
  cy.verificarQuantidadeProdutosNoCarrinho(1)
  
  // Verificar que a quantidade é 2
  cy.obterQuantidadeProduto(0).should('equal', '2')
})

// Cenário 08: Aplicar cupom inválido e validar erro
Cypress.Commands.add('validarAplicacaoCupomInvalido', (codigoInvalido = 'INVALIDO123') => {
  cy.obterTotal().then((totalAntes) => {
    cy.aplicarCupom(codigoInvalido)
    cy.verificarMensagemCupomInvalido()
    
    // Validar que o total não foi alterado
    cy.obterTotal().then((totalDepois) => {
      const totalAntesNum = parseFloat(totalAntes)
      const totalDepoisNum = parseFloat(totalDepois)
      expect(totalAntesNum).to.equal(totalDepoisNum)
    })
  })
})

// Cenário 09: Prosseguir para checkout com carrinho cheio
Cypress.Commands.add('validarProceedToCheckoutComProdutos', () => {
  cy.clicarBotaoProceedToCheckout()
  cy.url().should('include', 'checkout')
  
  // Validar que produtos estão listados no checkout
  cy.get('table.shop_table, div.woocommerce-checkout-review-order-table')
    .should('be.visible')
})

// Cenário 10: Atualizar quantidade para zero e remover
Cypress.Commands.add('validarRemocaoViaQuantidadeZero', () => {
  cy.atualizarQuantidadeProduto(0)
  cy.clicarBotaoUpdateBasket()
  cy.wait(1000)
  cy.verificarCarrinhoVazio()
})