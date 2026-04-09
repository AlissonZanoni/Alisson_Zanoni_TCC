// ===================================
// Comandos Customizados - Cenário 08
// Filtrar por Alcance de Preço
// Funções Específicas do Cenário
// ===================================

// Passos 3-6: Ajustar filtros de preço usando jQuery UI Slider e validar resultado
Cypress.Commands.add('filtrarPorAlcanceDePreco', (minPrice, maxPrice) => {
  // Tenta usar a API jQuery UI do slider; se não existir, faz fallback pelos inputs e botão Filter
  cy.window().then((win) => {
    try {
      const $ = win.$
      const $slider = $ ? $('.price_slider') : null
      if ($slider && typeof $slider.slider === 'function') {
        $slider.slider('values', [minPrice, maxPrice])
        $slider.trigger('change')
        return
      }
    } catch (e) {
      // ignore e faça fallback
    }

    // Fallback: setar os inputs ocultos e clicar em Filter (forçar eventos em elementos ocultos)
    cy.get('#min_price').then(($min) => {
      if ($min.length) cy.wrap($min).invoke('val', String(minPrice)).trigger('change', { force: true })
    })
    cy.get('#max_price').then(($max) => {
      if ($max.length) cy.wrap($max).invoke('val', String(maxPrice)).trigger('change', { force: true })
    })
    cy.get('.price_slider_amount button.button').click({ force: true })
  })

  // Aguarda o carregamento dos produtos filtrados
  cy.get('.products').should('exist')
  cy.wait(500)

  // Valida que a URL contém os parâmetros de filtro
  cy.location('search').should('contain', `min_price=${minPrice}`)
  cy.location('search').should('contain', `max_price=${maxPrice}`)

  // Valida que os produtos exibidos têm preços dentro do range (considerando promoções com del/ins)
  cy.get('.products .product .price').each(($priceEl) => {
    const text = $priceEl.text().replace(/\s+/g, ' ')
    // Extrai números do preço (último número é o preço final, considerando del/ins)
    const nums = text.match(/\d+[\.,]?\d*/g) || ['0']
    const currentPrice = parseFloat(nums[nums.length - 1].replace(',', '.'))
    expect(currentPrice, `product price ${currentPrice} within range [${minPrice}, ${maxPrice}]`).to.be.gte(minPrice).and.to.be.lte(maxPrice)
  })
})