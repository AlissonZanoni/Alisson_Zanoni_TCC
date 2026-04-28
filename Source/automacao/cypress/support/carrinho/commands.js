// ===================================
// Comandos Compartilhados - Carrinho de Compras
// ===================================

// Acessar página do carrinho
Cypress.Commands.add('acessarPaginaCarrinho', () => {
  // Clique no link do carrinho no header
  cy.get('a.wpmenucart-contents').click()
  cy.wait(1000)
})

// Acessar Shop e adicionar um produto ao carrinho
Cypress.Commands.add('adicionarProdutoAoCarrinho', (indexProduto = 0) => {
  cy.visit('/shop/')
  cy.wait(1000)
  
  // Clique no botão "Add to basket" - usar seletor completo com ajax_add_to_cart
  cy.get('a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart').eq(indexProduto).click()
  cy.wait(1000)
})

// Remover um produto do carrinho
Cypress.Commands.add('removerProdutoDoCarrinho', (indexProduto = 0) => {
  // Procurar pelo link/botão de remover (pode ser um X ou um ícone de lixeira)
  cy.get('a.remove, .product-remove a, button.remove-product').eq(indexProduto).click()
  cy.wait(1000)
})

// Atualizar quantidade de um produto no carrinho
Cypress.Commands.add('atualizarQuantidadeProduto', (novaQuantidade, indexProduto = 0) => {
  cy.get('input[type="number"]').eq(indexProduto).clear().type(novaQuantidade)
})

// Clicar no botão "UPDATE BASKET"
Cypress.Commands.add('clicarBotaoUpdateBasket', () => {
  cy.get('input[name="update_cart"]').click()
  cy.wait(3000)
})

// Aplicar código de cupom
Cypress.Commands.add('aplicarCupom', (codigoCupom) => {
  cy.get('input[name="coupon_code"]').clear().type(codigoCupom)
  cy.get('input[name="apply_coupon"], button.button[value="Apply coupon"]').click()
  cy.wait(1000)
})

// Clicar no botão "PROCEED TO CHECKOUT"
Cypress.Commands.add('clicarBotaoProceedToCheckout', () => {
  cy.get('a.checkout-button, button.checkout-button, .button.checkout-button').click()
  cy.wait(1000)
})

// Verificar que o produto está no carrinho
Cypress.Commands.add('verificarProdutoNoCarrinho', (nomeProduto) => {
  cy.get('a[data-product_title]')
    .contains(nomeProduto)
    .should('be.visible')
})

// Verificar estrutura da tabela do carrinho
Cypress.Commands.add('verificarEstruturaTabelaCarrinho', () => {
  // Validar que a tabela contém as colunas esperadas
  cy.get('table.shop_table thead th, table thead th').should('exist')
  cy.contains('Product').should('be.visible')
  cy.contains('Price').should('be.visible')
  cy.contains('Quantity').should('be.visible')
  cy.contains('Total').should('be.visible')
})

// Verificar seção de totalizadores (Subtotal, Tax, Total)
Cypress.Commands.add('verificarSecaoBasketTotals', () => {
  cy.get('div.cart_totals, div.woocommerce-cart-totals').should('be.visible')
  cy.contains('Subtotal').should('be.visible')
  cy.contains('Tax').should('be.visible')
  cy.contains('Total').should('be.visible')
})

// Obter valor do Subtotal
Cypress.Commands.add('obterSubtotal', () => {
  cy.get('tr.cart-subtotal td:last-child, .order-subtotal .amount')
    .invoke('text')
    .then((text) => {
      return text.replace(/[^\d.,]/g, '')
    })
})

// Obter valor do Tax
Cypress.Commands.add('obterTax', () => {
  return cy.get('tr.tax-rate')
    .find('td .amount')
    .invoke('text')
    .then((text) => {
      return parseFloat(text.replace(/[^\d.]/g, ''))
    })
})

// Obter valor do Total
Cypress.Commands.add('obterTotal', () => {
  cy.get('tr.order-total td:last-child')
    .invoke('text')
    .then((text) => {
      return text.replace(/[^\d.,]/g, '')
    })
})

// Verificar mensagem de sucesso de cupom aplicado
Cypress.Commands.add('verificarMensagemCupomAplicado', () => {
  cy.get('div.woocommerce-message, div.woocommerce-notice--success')
    .should('be.visible')
    .should('contain', 'Coupon code applied successfully')
})

// Verificar mensagem de erro de cupom inválido
Cypress.Commands.add('verificarMensagemCupomInvalido', () => {
  cy.get('.woocommerce-error, .woocommerce-notice--error')
    .should('be.visible')
})

// Verificar que o carrinho está vazio
Cypress.Commands.add('verificarCarrinhoVazio', () => {
  cy.get('p.cart-empty, .woocommerce-cart-empty, .cart-empty, div:contains("cart is empty")')
    .should('be.visible')
})

// Verificar quantidade de produtos na tabela do carrinho
Cypress.Commands.add('verificarQuantidadeProdutosNoCarrinho', (quantidade) => {
  cy.get('table.shop_table')
    .find('tr.cart_item')
    .should('have.length', quantidade)
})

// Obter quantidade exibida de um produto
Cypress.Commands.add('obterQuantidadeProduto', (indexProduto = 0) => {
  cy.get('table.shop_table tbody tr').eq(indexProduto)
    .find('input[type="number"]')
    .invoke('val')
    .then((val) => {
      return val || '0'
    })
})

// Obter preço total de um item no carrinho
Cypress.Commands.add('obterTotalItemCarrinho', (indexProduto = 0) => {
  cy.get('table.shop_table tbody tr').eq(indexProduto)
    .find('td.product-subtotal')
    .invoke('text')
    .then((text) => {
      // Extrair apenas números e ponto
      const cleaned = text.replace(/[^\d.]/g, '')
      return parseFloat(cleaned) || 0
    })
})
