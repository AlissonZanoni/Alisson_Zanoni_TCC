# Instruções para Cypress Support (cypress/support/)

## Objetivo
Esta instrução guia o desenvolvimento e organização de comandos customizados, helpers e utilitários reutilizáveis em Cypress. O suporte é o "coração" da arquitetura de testes, onde toda lógica de interação com a aplicação reside.

## Estrutura de Pastas

```
cypress/support/
├── commands.js                           # Comandos globais (reutilizáveis em todas as seções)
├── e2e.js                               # Configuração global de suporte
├── home_page/
│   └── commands.js                      # Comandos específicos da Home Page
├── my_account_login/
│   └── commands.js                      # Comandos específicos de Login
├── my_account_registration/
│   ├── commands.js                      # Comandos compartilhados (email, senha, botão)
│   ├── cenario_01_registro.js           # Comandos exclusivos do Cenário 01
│   └── cenario_02_registro_email_invalido.js  # Comandos exclusivos do Cenário 02
├── my_account/
│   └── commands.js                      # Comandos da Área Logada (Dashboard, Logout, etc)
└── shop/
    └── commands.js                      # Comandos específicos da Loja
```

## Organização em Três Níveis

### 1. Comandos Globais (`cypress/support/commands.js`)
Reutilizáveis em **qualquer seção** — navegação base, utilitários, intercepts:

```javascript
// Global - usável em qualquer teste
Cypress.Commands.add('abrirNavigadorEInserirURL', () => {
  cy.intercept('**/pagead/js/adsbygoogle.js', { statusCode: 404 })
  cy.visit('http://practice.automationtesting.in/')
})

Cypress.Commands.add('clicarNoMenuMyAccount', () => {
  cy.contains('My Account').click()
})

Cypress.Commands.add('generateUniqueEmail', () => {
  return cy.wrap(`user_${Date.now()}@example.com`)
})
```

### 2. Comandos de Seção (`cypress/support/[secao]/commands.js`)
Reutilizáveis **dentro de uma seção específica** — validações comuns, preenchimentos:

```javascript
// cypress/support/my_account_registration/commands.js
// UsÁvel em TODOS os cenários de registro (01-09)

Cypress.Commands.add('preencherEmailRegistro', (email) => {
  const selector = '#reg_email'
  cy.get(selector).should('be.visible').clear()
  if (email !== undefined && email !== null && email !== '') {
    cy.get(selector).type(email)
  }
})

Cypress.Commands.add('verificarForcaSenha', (expected) => {
  const selector = '.woocommerce-password-strength'
  // ... lógica compartilhada entre cenários 06-09
})
```

### 3. Comandos de Cenário (`cypress/support/[secao]/cenario_XX_[descricao].js`)
**Exclusivos de um cenário específico** — validações ou ações únicas:

```javascript
// cypress/support/my_account_registration/cenario_01_registro.js
// Usado SOMENTE em cypress/e2e/my_account_registration/cenario_01_registro.cy.js

Cypress.Commands.add('verificarRegistroSucesso', () => {
  cy.contains(/Logout|Dashboard|Hello/i).should('be.visible')
})

Cypress.Commands.add('verificarTextoDashboard', (textoEsperado) => {
  cy.contains(textoEsperado).should('be.visible')
})
```

## Padrão de Nomeação de Comandos

### ✅ Nomes Descritivos (Bom)
```javascript
cy.preencherEmailRegistro('email@test.com')
cy.clicarBotaoRegistrar()
cy.verificarMensagemErro('Email inválido')
cy.validarForçaSenha('strong')
cy.fazerLoginComCredenciais('user', 'pass')
```

### ❌ Nomes Genéricos (Ruim)
```javascript
cy.fill('email@test.com')        // Qual campo?
cy.click()                        // Qual botão?
cy.check('error')                 // Qual tipo de erro?
cy.verifyPassword()               // Verificar o quê?
cy.login('user', 'pass')          // Com qual método?
```

## Padrão de Implementação

### Estrutura de Um Comando
```javascript
Cypress.Commands.add('nomeDescritivo', (param1, param2 = default) => {
  // 1. Validar seletor/elemento
  const selector = '#meu-seletor'
  cy.get(selector, { timeout: 10000 }).should('exist')

  // 2. Executar ação
  cy.get(selector).clear().type(param1)

  // 3. Aguardar estado (se necessário)
  cy.wait(300)  // Only if needed (timing-sensitive logic)

  // 4. Validar resultado ou retornar
  cy.get('.resultado').should('be.visible')
})
```

### Exemplo Completo
```javascript
Cypress.Commands.add('loginWithCredentials', (username, password) => {
  // Navegue para página de login (assume que elemento já está acessível)
  cy.get('input[name="username"]')
    .should('be.visible')
    .clear()
    .type(username)

  cy.get('input[name="password"]')
    .should('be.visible')
    .clear()
    .type(password)

  cy.get('button[name="login"]')
    .should('not.be.disabled')
    .click()
})
```

## Tratamento de Validações HTML5

Para validar campos com HTML5 validation (required, email, etc):

```javascript
Cypress.Commands.add('validarEmailInvalidoHtml5', (expectedPattern) => {
  const selector = '#reg_email'
  cy.get(selector).then($input => {
    const el = $input[0]
    expect(el.checkValidity()).to.equal(false)
    const msg = el.validationMessage || ''
    expect(msg).to.match(expectedPattern)
  })
})
```

## Indicadores de Força de Senha

Comando reutilizável para diferentes níveis:

```javascript
Cypress.Commands.add('verificarForcaSenha', (expected) => {
  const selector = '.woocommerce-password-strength'
  const messages = {
    short: /Very weak|Please enter a stronger password/i,
    bad: /Weak|Please enter a stronger password/i,
    good: /Medium|Médio/i,
    strong: /Strong|Forte/i,
  }

  const acceptableClasses = {
    short: ['short', 'bad'],
    bad: ['bad'],
    good: ['good'],
    strong: ['strong']
  }

  cy.get(selector).should('be.visible').invoke('text').then((txt) => {
    cy.get(selector).invoke('attr', 'class').then((cls) => {
      const classString = cls || ''
      const allowed = acceptableClasses[expected] || [expected]
      const found = allowed.some(c => classString.includes(c))
      expect(found).to.equal(true)
      expect(txt).to.match(messages[expected])
    })
  })
})
```

## Boas Práticas

1. **Uma responsabilidade por comando** — cada comando faz UMA coisa bem.
2. **Nomes começam com verbo** — `preencherEmail()`, `clicarBotao()`, `verificarErro()`.
3. **Parâmetros com valores defaults** — evita obrigar o null/undefined.
4. **Timeouts apropriados** — use `{ timeout: 10000 }` para elementos lentos.
5. **Retry automático** — `cy.get()` já retenta; não force múltiplos waits.
6. **Sem força com `{force: true}`** — se precisa, é sinal de seletor frágil; corija o seletor.
7. **Documentar comportamento esperado** — comentários para lógica não óbvia.
8. **Reutilize em vez de duplicar** — se escreve comando parecido 2x, centralize.

## Organização no e2e.js

Sempre importe comandos globais e específicos da seção:

```javascript
// cypress/support/e2e.js

// Importa comandos globais (disponível em todos os testes)
import './commands'

// Importa comandos de seção conforme necessário
import './home_page/commands'
import './shop/commands'
import './my_account_login/commands'
import './my_account_registration/commands'
import './my_account/commands'

// Fixtures (dados de teste)
// Cypress.Commands.add('loadFixture', (fixtureName) => { ... })
```

## Exemplo: Seção Completa (My Account Registration)

### Nível 1: Comandos Globais (já existem)
```javascript
// cypress/support/commands.js
cy.abrirNavigadorEInserirURL()
cy.clicarNoMenuMyAccount()
cy.generateUniqueEmail()
```

### Nível 2: Comandos da Seção
```javascript
// cypress/support/my_account_registration/commands.js
cy.preencherEmailRegistro(email)
cy.preencherSenhaRegistro(senha)
cy.clicarRegistrar()
cy.preencherEmailUnico()
cy.verificarBotaoRegisterDesabilitado()
cy.validarSenhaCurtaHtml5(pattern)
cy.verificarForcaSenha(level)
```

### Nível 3: Comandos de Cenário
```javascript
// cypress/support/my_account_registration/cenario_01_registro.js
cy.verificarRegistroSucesso()
cy.verificarTextoDashboard(text)

// cypress/support/my_account_registration/cenario_02_registro_email_invalido.js
cy.verificarRegistroErro(msg)
cy.validarEmailInvalidoHtml5(pattern)
```

### Uso em Testes
```javascript
// cypress/e2e/my_account_registration/cenario_01_registro.cy.js
describe('...', () => {
  it('...', () => {
    cy.abrirNavigadorEInserirURL()        // Global
    cy.clicarNoMenuMyAccount()            // Global
    cy.preencherEmailUnico()              // Seção
    cy.preencherSenhaRegistro('pass')    // Seção
    cy.clicarRegistrar()                  // Seção
    cy.verificarRegistroSucesso()        // Cenário 01
    cy.verificarTextoDashboard('...')    // Cenário 01
  })
})
```

## Checklist para PR / Commit

- [ ] Comando tem nome descritivo (verbo + substantivo)
- [ ] Comando está no nível correto (global/seção/cenário)
- [ ] Reutilizável? Senão, mova para nível apropriado
- [ ] Sem hardcodes — use parâmetros
- [ ] Sem `{force: true}` — valide seletor
- [ ] Timeout apropriado (10s padrão, >10s se slow)
- [ ] Importado em `e2e.js` ou especificamente em teste
- [ ] Comentário para lógica complexa
- [ ] Sem console.log() ou código comentado

## Troubleshooting

**Q: Comando funciona isolado mas falha em suite?**  
R: Possível estado compartilhado. Use `cy.clearCookies()` ou `cy.clearLocalStorage()` entre testes.

**Q: Seletor funciona em DevTools mas não em Cypress?**  
R: Timing. Use `cy.get(selector, { timeout: 15000 })` para elementos lentos.

**Q: Múltiplos elementos encontrados?**  
R: Seja mais específico: `cy.get('input[name="username"]')` em vez de `cy.get('input')`.
