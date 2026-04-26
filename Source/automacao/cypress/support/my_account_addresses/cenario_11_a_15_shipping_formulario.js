// ===================================
// Comandos Específicos - Cenários 11-17: Editar Formulário Shipping Address
// ===================================

// Preencher formulário Shipping Address com dados completos
// Parâmetros: firstName, lastName, country, address1, city, state, postcode
Cypress.Commands.add('preencherShippingAddressCompleto', (firstName, lastName, country, address1, city, state, postcode) => {
  cy.get('#shipping_first_name').clear().type(firstName)
  cy.get('#shipping_last_name').clear().type(lastName)
  
  // Selecionar país via Select2 (componente customizado)
  cy.selecionarPaisShipping(country)
  
  cy.get('#shipping_address_1').clear().type(address1)
  cy.get('#shipping_city').clear().type(city)
  
  // Selecionar estado via Select2
  cy.selecionarEstadoShipping(state)
  
  cy.get('#shipping_postcode').clear().type(postcode)
})

// Preencher formulário com campos opcionais (Company, Address 2)
Cypress.Commands.add('preencherShippingAddressComOpcionais', (firstName, lastName, company, address2, country, address1, city, state, postcode) => {
  cy.get('#shipping_first_name').clear().type(firstName)
  cy.get('#shipping_last_name').clear().type(lastName)
  cy.get('#shipping_company').clear().type(company)
  cy.get('#shipping_address_2').clear().type(address2)
  
  cy.selecionarPaisShipping(country)
  
  cy.get('#shipping_address_1').clear().type(address1)
  cy.get('#shipping_city').clear().type(city)
  cy.selecionarEstadoShipping(state)
  cy.get('#shipping_postcode').clear().type(postcode)
})

// Limpar campos obrigatórios do formulário Shipping Address
Cypress.Commands.add('limparCamposShippingAddress', () => {
  cy.get('#shipping_first_name').clear()
  cy.get('#shipping_last_name').clear()
  cy.get('#shipping_address_1').clear()
  cy.get('#shipping_city').clear()
  cy.get('#shipping_postcode').clear()
})

// Selecionar país e aguardar atualização da lista de estados (Shipping)
Cypress.Commands.add('selecionarPaisShipping', (pais) => {
  cy.get('#s2id_shipping_country .select2-choice').click()
  cy.get('[aria-owns="select2-results-1"]').type(pais)
  cy.get('#select2-results-1 .select2-result-label').contains(pais).click()
  cy.wait(1000) // Aguardar atualização de estados
})

// Selecionar estado e aguardar atualização (Shipping)
Cypress.Commands.add('selecionarEstadoShipping', (estado) => {
  cy.get('#s2id_shipping_state .select2-choice').click()
  cy.get('[aria-owns="select2-results-2"]').type(estado)
  cy.get('#select2-results-2 .select2-result-label').contains(estado).click()
  cy.wait(500)
})

// Verificar que lista de estados foi atualizada após troca de país (Shipping)
Cypress.Commands.add('verificarListaEstadosAtualizadaShipping', () => {
  // Clicar no Select2 para abrir a lista de estados
  cy.get('#s2id_shipping_state .select2-choice').should('be.visible').click()
  
  // Validar que o primeiro estado da lista é "Australian Capital Territory"
  cy.get('#select2-results-2 .select2-result-label').first().should('contain', 'Australian Capital Territory')
})

// Selecionar o primeiro estado da lista de estados (Select2) - Shipping
Cypress.Commands.add('selecionarPrimeiroEstadoShipping', () => {
  cy.get('#select2-results-2 .select2-result-label').first().click()
  cy.wait(500)
})

// Verificar validação de campos obrigatórios vazios - Shipping (5 campos, sem Email/Phone)
Cypress.Commands.add('verificarValidacaoCamposObrigatoriosShipping', () => {
  // Validar que a lista de erros existe
  cy.get('ul.woocommerce-error').should('be.visible')
  
  // Verificar que cada campo obrigatório do Shipping possui mensagem de erro
  // Nota: Shipping Address não possui campos Email e Phone (apenas 5 campos obrigatórios)
  const camposObrigatorios = [
    'First Name',
    'Last Name',
    'Address',
    'Town / City',
    'Postcode / ZIP'
  ]
  
  camposObrigatorios.forEach((campo) => {
    cy.get('ul.woocommerce-error li').should('contain', `${campo} is a required field.`)
  })
})
