// ===================================
// Comandos - My Account Registration (compartilhados na seção)
// ===================================

// Preencher campo de email para registro
Cypress.Commands.add('preencherEmailRegistro', (email) => {
  const selector = '#reg_email'
  cy.get(selector, { timeout: 10000 }).should('be.visible').clear()
  if (email !== undefined && email !== null && email !== '') {
    cy.get(selector).type(email)
  }
})

// Preencher campo de senha para registro
Cypress.Commands.add('preencherSenhaRegistro', (senha) => {
  const selector = '#reg_password'
  cy.get(selector, { timeout: 10000 }).should('be.visible').clear()
  if (senha !== undefined && senha !== null && senha !== '') {
    cy.get(selector).type(senha)
  }
})

// Clicar no botão Registrar
Cypress.Commands.add('clicarRegistrar', () => {
  const selector = 'input[name="register"], button[name="register"], input[value="Register"]'
  cy.get(selector).first().then($btn => {
    const disabled = $btn.prop('disabled') || $btn.is(':disabled')
    if (disabled) {
      // tentar focar o campo de senha para acionar revalidação que habilita o botão
      cy.log('Botão Register está desabilitado — focando #reg_password para habilitar')
      cy.get('#reg_password', { timeout: 5000 }).click({ force: true })
      cy.wait(200)
    }
  })
  // agora aguarda estar habilitado e clica
  cy.get(selector).first().should('not.be.disabled').click()
})

// Preencher email único (utilitário para evitar lógica nos testes)
Cypress.Commands.add('preencherEmailUnico', () => {
  cy.generateUniqueEmail().then((email) => {
    cy.preencherEmailRegistro(email)
  })
})

// Verificar que o botão Register esteja desabilitado
Cypress.Commands.add('verificarBotaoRegisterDesabilitado', () => {
  const selector = 'input[name="register"], button[name="register"], input[value="Register"]'
  cy.get(selector).first().should('exist').and('be.disabled')
})

// Validação HTML5 para senha curta (campo password)
Cypress.Commands.add('validarSenhaCurtaHtml5', (expectedRegex) => {
  const selector = '#reg_password'
  cy.get(selector).then($input => {
    const el = $input[0]
    // campo deve ser inválido segundo validação do navegador
    expect(el.checkValidity()).to.equal(false)
    const msg = el.validationMessage || ''
    expect(msg).to.match(expectedRegex)
  })
})

// Registrar usando email único e senha fornecida
Cypress.Commands.add('registrarComSenha', (senha) => {
  cy.preencherEmailUnico()
  cy.preencherSenhaRegistro(senha)
  cy.clicarRegistrar()
})

// Verificar sugestão/aviso sobre força da senha, se presente
Cypress.Commands.add('verificarAvisoSenhaFraca', () => {
  cy.get('body').then($body => {
    if ($body.find('.woocommerce-error').length) {
      cy.get('.woocommerce-error').should('be.visible')
    } else if ($body.find('.password-strength').length) {
      cy.get('.password-strength').should('be.visible')
    } else {
      cy.log('Nenhuma mensagem de aviso de senha fraca encontrada')
    }
  })
})

// Verificar elemento de força da senha (classes: short, bad, good, strong)
Cypress.Commands.add('verificarForcaSenha', (expected) => {
  const selector = '.woocommerce-password-strength'
  const messages = {
    short: /Very weak|Please enter a stronger password|Muito fraca|Fraca/i,
    bad: /Weak|Please enter a stronger password|Fraca/i,
    good: /Medium|Médio/i,
    strong: /Strong|Forte/i,
  }

  // classes consideradas equivalentes por estado
  const acceptableClasses = {
    short: ['short', 'bad'], // alguns temas usam 'bad' para senhas muito fracas
    bad: ['bad'],
    good: ['good'],
    strong: ['strong']
  }

  cy.get('body').then($body => {
    if ($body.find(selector).length === 0) {
      cy.log('Elemento de força de senha não encontrado')
      throw new Error('Elemento .woocommerce-password-strength não encontrado')
    }
  })

  if (typeof expected === 'string' && messages[expected]) {
    cy.get(selector).should('be.visible').invoke('text').then((txt) => {
      cy.get(selector).invoke('attr', 'class').then((cls) => {
        const classString = cls || ''
        const allowed = acceptableClasses[expected] || [expected]
        const found = allowed.some(c => classString.includes(c))
        expect(found, `esperado classe entre ${allowed.join(', ')} — atual: ${classString}`).to.equal(true)
        expect(txt).to.match(messages[expected])
      })
    })
  } else if (expected instanceof RegExp) {
    cy.get(selector).should('be.visible').invoke('text').should('match', expected)
  } else {
    cy.get(selector).should('be.visible').invoke('text').then((txt) => {
      expect(txt.toLowerCase()).to.include(String(expected).toLowerCase())
    })
  }
})

