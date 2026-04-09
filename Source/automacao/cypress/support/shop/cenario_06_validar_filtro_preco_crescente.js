// ===================================
// Comandos Customizados - Cenário 06
// Validar filtro por Preço Crescente
// Funções Específicas do Cenário
// ===================================

// Passo 3: Selecionar filtro por Preço Crescente e validar reordenação
// Valida que os preços estão em ordem crescente (helper específico do cenário 06)
Cypress.Commands.add('validarPrecosCrescentes', () => {
  cy.get('.products .product').then(($items) => {
    const prices = [...$items].map((el) => {
      const priceEl = el.querySelector('.price')
      if (!priceEl) return 0
      const text = priceEl.textContent.replace(/\s+/g, ' ')
      const nums = text.match(/\d+[\.,]?\d*/g) || ['0']
      const val = parseFloat(nums[nums.length - 1].replace(',', '.'))
      return Number.isNaN(val) ? 0 : val
    })
    const sorted = [...prices].sort((a, b) => a - b)
    expect(prices, 'preços crescentes').to.deep.equal(sorted)
  })
})

Cypress.Commands.add('validarFiltroPrecoCrescente', () => {
  cy.sortProducts('price');
  cy.validarPrecosCrescentes();
});