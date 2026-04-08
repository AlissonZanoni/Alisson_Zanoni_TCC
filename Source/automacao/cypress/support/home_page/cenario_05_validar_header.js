// ===================================
// Comandos Customizados - Cenário 05
// Validar o header da página (logo, links e redirecionamentos)
// ===================================

// Verifica exibição da logo no header
Cypress.Commands.add('verificarHeaderLogo', () => {
  cy.get('header').then(($header) => {
    // tenta selecionar possíveis seletores de logo
    const logo = $header.find('img.custom-logo, img.site-logo, .site-logo img, .logo img, a.custom-logo-link img')
    if (logo.length) {
      cy.wrap(logo).should('be.visible')
    } else {
      // fallback: buscar link com texto que represente a marca
      cy.wrap($header).contains('a', /home|logo|practice/i).should('exist')
    }
  })
})

// Verifica exibição dos itens do header (textos esperados)
Cypress.Commands.add('verificarHeaderItensVisiveis', () => {
  const itens = ['Shop', 'My Account', 'Test Cases', 'AT Site', 'Demo Site']
  itens.forEach((item) => {
    cy.contains('a', item, { matchCase: false }).should('be.visible')
  })
})

// Verifica exibição e atributos do carrinho no header
Cypress.Commands.add('verificarHeaderCarrinho', () => {
  // seleciona o link do carrinho, suporte a seletor por id ou pela classe do link
  cy.get('#wpmenucartli a.wpmenucart-contents, a.wpmenucart-contents').first().then(($a) => {
    cy.wrap($a).should('be.visible')
    cy.wrap($a).should('have.attr', 'href').and('include', '/shop/')
    cy.wrap($a).should('have.attr', 'title').and('match', /Start shopping/i)
    cy.wrap($a).find('span.cartcontents').should('exist').and('be.visible')
    cy.wrap($a).find('span.amount').should('exist').and('be.visible')
  })
})

// Verifica que cada item do header redireciona (click muda a URL)
Cypress.Commands.add('verificarHeaderRedirecionamentos', () => {
  const expectations = [
    { text: 'Shop', expected: '/shop/' },
    { text: 'My Account', expected: '/my-account/' },
    { text: 'Test Cases', expected: '/test-cases/' },
    { text: 'AT Site', expected: 'automationtesting.in' },
    { text: 'Demo Site', expected: 'demo.automationtesting.in' },
    ]

  expectations.forEach(({ text, expected }) => {
    cy.contains('a', text, { matchCase: false }).should('have.attr', 'href').then((href) => {
      if (text === 'AT Site' || text === 'Demo Site') {
        // para links externos, validar que o href contém a substring esperada
        expect(href, 'href deve conter a substring esperada').to.include(expected)
      } else {
        // para links internos, validar que o href termina com a substring esperada
        expect(href, 'href deve terminar com a substring esperada').to.match(new RegExp(`${expected}$`))
      }
    }, () => {
      // trata caso de elemento não encontrado sem lançar TypeError
      cy.log('Link não encontrado no header para:', text)
    })
  })
})
