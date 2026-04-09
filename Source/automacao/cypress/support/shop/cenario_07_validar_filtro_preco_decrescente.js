// ===================================
// Comandos Customizados - Cenário 07
// Validar filtro por Preço Decrescente
// Funções Específicas do Cenário
// ===================================

// Passo 3: Selecionar filtro por Preço Decrescente e validar reordenação
// Valida que os preços estão em ordem decrescente (helper específico do cenário 07)
Cypress.Commands.add('validarPrecosDecrescentes', () => {
  cy.get('.products .product').then(($items) => {
    const prices = [...$items].map((el) => {
      const priceEl = el.querySelector('.price')
      if (!priceEl) return 0
      const text = priceEl.textContent.replace(/\s+/g, ' ')
      const nums = text.match(/\d+[\.,]?\d*/g) || ['0']
      const val = parseFloat(nums[nums.length - 1].replace(',', '.'))
      return Number.isNaN(val) ? 0 : val
    })
    const sorted = [...prices].sort((a, b) => b - a)
    expect(prices, 'preços decrescentes').to.deep.equal(sorted)
  })
})

Cypress.Commands.add('validarFiltroPrecoDecrescente', () => {
  cy.sortProducts('price-desc');
  cy.validarPrecosDecrescentes();
});