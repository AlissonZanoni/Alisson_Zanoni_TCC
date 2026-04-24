// ===================================
// Comandos Específicos - Cenários 04-10: Editar Formulário Billing Address
// ===================================

// Preencher formulário Billing Address com dados completos
// Parâmetros: firstName, lastName, email, phone, country, address1, city, state, postcode
Cypress.Commands.add('preencherBillingAddressCompleto', (firstName, lastName, email, phone, country, address1, city, state, postcode) => {
  cy.get('#billing_first_name').clear().type(firstName)
  cy.get('#billing_last_name').clear().type(lastName)
  cy.get('#billing_email').clear().type(email)
  cy.get('#billing_phone').clear().type(phone)
  
  // Selecionar país via Select2 (componente customizado)
  cy.selecionarPais(country)
  
  cy.get('#billing_address_1').clear().type(address1)
  cy.get('#billing_city').clear().type(city)
  
  // Selecionar estado via Select2
  cy.selecionarEstado(state)
  
  cy.get('#billing_postcode').clear().type(postcode)
})

// Preencher formulário com email inválido
Cypress.Commands.add('preencherBillingAddressComEmailInvalido', (firstName, lastName, email, phone, country, address1, city, state, postcode) => {
  cy.get('#billing_first_name').clear().type(firstName)
  cy.get('#billing_last_name').clear().type(lastName)
  cy.get('#billing_email').clear().type(email)
  cy.get('#billing_phone').clear().type(phone)
  
  cy.selecionarPais(country)
  
  cy.get('#billing_address_1').clear().type(address1)
  cy.get('#billing_city').clear().type(city)
  cy.selecionarEstado(state)
  cy.get('#billing_postcode').clear().type(postcode)
})

// Preencher formulário com telefone inválido
Cypress.Commands.add('preencherBillingAddressComTelefoneInvalido', (firstName, lastName, email, phone, country, address1, city, state, postcode) => {
  cy.get('#billing_first_name').clear().type(firstName)
  cy.get('#billing_last_name').clear().type(lastName)
  cy.get('#billing_email').clear().type(email)
  cy.get('#billing_phone').clear().type(phone)
  
  cy.selecionarPais(country)
  
  cy.get('#billing_address_1').clear().type(address1)
  cy.get('#billing_city').clear().type(city)
  cy.selecionarEstado(state)
  cy.get('#billing_postcode').clear().type(postcode)
})

// Preencher formulário com campos opcionais (Company, Address 2)
Cypress.Commands.add('preencherBillingAddressComOpcionais', (firstName, lastName, company, address2, email, phone, country, address1, city, state, postcode) => {
  cy.get('#billing_first_name').clear().type(firstName)
  cy.get('#billing_last_name').clear().type(lastName)
  cy.get('#billing_company').clear().type(company)
  cy.get('#billing_address_2').clear().type(address2)
  cy.get('#billing_email').clear().type(email)
  cy.get('#billing_phone').clear().type(phone)
  
  cy.selecionarPais(country)
  
  cy.get('#billing_address_1').clear().type(address1)
  cy.get('#billing_city').clear().type(city)
  cy.selecionarEstado(state)
  cy.get('#billing_postcode').clear().type(postcode)
})

// Limpar campos obrigatórios do formulário Billing Address
Cypress.Commands.add('limparCamposBillingAddress', () => {
  cy.get('#billing_first_name').clear()
  cy.get('#billing_last_name').clear()
  cy.get('#billing_email').clear()
  cy.get('#billing_phone').clear()
  cy.get('#billing_address_1').clear()
  cy.get('#billing_city').clear()
  cy.get('#billing_postcode').clear()
})

// Verificar validação de campos obrigatórios vazios
Cypress.Commands.add('verificarValidacaoCamposObrigatorios', () => {
  // Validar que a lista de erros existe
  cy.get('ul.woocommerce-error').should('be.visible')
  
  // Verificar que cada campo obrigatório possui mensagem de erro
  const camposObrigatorios = [
    'First Name',
    'Last Name',
    'Email Address',
    'Phone',
    'Address',
    'Town / City',
    'Postcode / ZIP'
  ]
  
  camposObrigatorios.forEach((campo) => {
    cy.get('ul.woocommerce-error li').should('contain', `${campo} is a required field.`)
  })
})

// Verificar validação de email inválido (HTML5 validation)
Cypress.Commands.add('verificarValidacaoEmailInvalido', () => {
  cy.get('#billing_email').then(($input) => {
    expect($input[0].validationMessage).not.to.be.empty
  })
})

// Verificar validação de telefone inválido
Cypress.Commands.add('verificarValidacaoTelefoneInvalido', () => {
  // Validar que a mensagem de erro específica do telefone aparece
  cy.get('ul.woocommerce-error li').should('contain', 'Phone is not a valid phone number.')
})

// Verificar que lista de estados foi atualizada após troca de país
Cypress.Commands.add('verificarListaEstadosAtualizada', () => {
  // Clicar no Select2 para abrir a lista de estados
  cy.get('#s2id_billing_state .select2-choice').should('be.visible').click()
  
  // Validar que o primeiro estado da lista é "Australian Capital Territory"
  cy.get('#select2-results-2 .select2-result-label').first().should('contain', 'Australian Capital Territory')
})

// Selecionar o primeiro estado da lista de estados (Select2)
Cypress.Commands.add('selecionarPrimeiroEstado', () => {
  cy.get('#select2-results-2 .select2-result-label').first().click()
  cy.wait(500)
})
