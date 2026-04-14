# Instruções para Testes E2E (cypress/e2e/)

## Objetivo
Esta instrução guia o desenvolvimento e manutenção dos testes end-to-end em Cypress. Todos os testes devem seguir o padrão estabelecido e validar comportamentos reais da aplicação.

## Estrutura de Pastas
```
cypress/e2e/
├── home_page/                    # Cenários da página inicial
│   ├── cenario_01_sliders.cy.js
│   ├── cenario_02_arrivals.cy.js
│   └── ...
├── shop/                         # Cenários da loja
│   ├── cenario_01_validar_header.cy.js
│   ├── cenario_02_validar_categorias.cy.js
│   └── ...
├── my_account_registration/      # Cenários de registro
│   ├── cenario_01_registro.cy.js
│   ├── cenario_02_registro_email_invalido.cy.js
│   └── ...
├── my_account_login/             # Cenários de login
│   ├── cenario_01_login_valido.cy.js
│   ├── cenario_02_login_incorretos.cy.js
│   └── ...
└── my_account/                   # Cenários da área logada
    ├── cenario_01_dashboard.cy.js
    └── ...
```

## Padrão de Nomenclatura de Testes
- **Formato:** `cenario_XX_descricao_do_teste.cy.js`
- **Exemplo:** `cenario_01_tres_sliders.cy.js`, `cenario_05_validar_header.cy.js`
- **Descrição:** Usar português, nomes claros e indicativos da funcionalidade testada.

## Estrutura de Um Spec (arquivo .cy.js)

### ✅ Padrão Correto
```javascript
describe('My Account - Login - Cenário 01: Login com credenciais válidas', () => {
  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    cy.navigateToLoginPage()
    cy.loginWithCredentials('usuario_teste', 'senha_teste')
    cy.verifyLoginSuccess()
  })
})
```

**Regras:**
1. **Usar apenas comandos customizados no corpo do teste** — toda lógica deve estar em `cypress/support/`.
2. **Describe:** Incluir contexto (seção + cenário).
3. **It:** Descrever o comportamento esperado de forma clara.
4. **Sem lógica inline** — sem `cy.get()`, `cy.type()` diretos no teste (exceto em casos simples como validações de atributo HTML).

### ❌ Padrão Incorreto
```javascript
describe('Login Test', () => {
  it('login works', () => {
    cy.visit('http://practice.automationtesting.in/')
    cy.contains('My Account').click()
    cy.get('input[name="username"]').type('user')  // ❌ Lógica no teste
    cy.get('input[name="password"]').type('pass')   // ❌ Lógica no teste
    cy.get('button').click()                         // ❌ Genérico
  })
})
```

## Mapeamento: Documentação → Teste Automatizado

**Regra Fundamental:** Cada passo da documentação em `Documentacao/cenarios_teste/[secao].txt` deve corresponder a um comando ou assert no teste.

### Exemplo de Mapeamento

**Documentação** (`Documentacao/cenarios_teste/home_page.txt`):
```
Cenário 01: Página inicial com apenas três sliders
Passos:
1. Abra o navegador e insira a url "http://practice.automationtesting.in/".
2. A página inicial deve conter exatamente três sliders.
```

**Teste** (`cypress/e2e/home_page/cenario_01_sliders.cy.js`):
```javascript
describe('Home Page - Cenário 01: Página inicial com apenas três sliders', () => {
  it('Deve verificar se a página possui exatamente três sliders', () => {
    cy.abrirNavigadorEInserirURL()  // Passo 1 → comando
    cy.verificarQuantidadeSliders(3)  // Passo 2 → validação
  })
})
```

## Boas Práticas

1. **Nenhuma lógica inline no teste** — todo `cy.get()`, `cy.type()`, `cy.click()` deve estar em comandos customizados.
2. **Nenhuma assertion direta nos specs (.should())** — TODAS as validações devem estar em comandos customizados no `cypress/support/[secao]/commands.js`.
   - ❌ **PROIBIDO:** `cy.url().should('include', '/my-account/')` 
   - ❌ **PROIBIDO:** `cy.get('input[name="password"]').should('have.attr', 'type', 'password')`
   - ❌ **PROIBIDO:** `cy.contains('Order Details').should('be.visible')`
   - ✅ **CORRETO:** `cy.verificarPaginaMyAccount()` (comando que contém o `.should()`)
   - ✅ **CORRETO:** `cy.verificarCampoSenhaMascarado()` (comando que contém a validação)
3. **Nomes de comandos descritivos** — `cy.loginWithCredentials()` é melhor que `cy.login()`.
4. **Assertions no final** — use `.should()`, `.expect()` para validar comportamento (mas DENTRO dos comandos).
5. **Evitar hardcodes** — use variáveis, fixtures ou commands auxiliares para dados de teste.
6. **Um cenário por arquivo** — facilita manutenção e rastreabilidade com documentação.
7. **Timing realista** — use `cy.wait()` apenas quando necessário; prefira `cy.get(...).should('be.visible')`.

## Estrutura de Specs: Regra de Ouro

**Specs devem conter APENAS:**
- Chamadas de comandos customizados
- `describe()` e `it()` (framework)
- `cy.wait()` em casos específicos de timing

**Specs NUNCA devem conter:**
- `.should()` / `.expect()`
- `.get()` com seletores
- `.type()` / `.click()` / `.select()`
- Qualquer outra ação ou assertion inline

## Casos Especiais

### Validações de HTML5 (checkValidity)
Para campos que usam validação HTML5 (ex.: email inválido):
```javascript
cy.get('#email').then($el => {
  const el = $el[0]
  expect(el.checkValidity()).to.equal(false)
  expect(el.validationMessage).to.match(/invalid/i)
})
```

### Indicadores de Força de Senha
```javascript
cy.verificarForcaSenha('short')   // Muito fraca
cy.verificarForcaSenha('bad')     // Fraca
cy.verificarForcaSenha('good')    // Média
cy.verificarForcaSenha('strong')  // Forte
```

### Tratamento de Erros (Bug-Tracking)
Se um cenário registra um bug, marque como tal:
```javascript
// Cenário 03: Validar botão Register desabilitado (Bug-Tracking)
// Esperado: botão deve estar desabilitado com email vazio
// Real: botão fica habilitado (BUG CONFIRMADO)
cy.verificarBotaoRegisterDesabilitado()  // Este teste falhará até o bug ser corrigido
```

## Execução de Testes

```bash
# Abrir Test Runner interativo
npm run test:open

# Rodar todos os testes
npm test

# Rodar suíte específica
npx cypress run --spec "cypress/e2e/home_page/**/*.cy.js"

# Rodar com navegador visível
npm run test:headed

# Gerar relatório JUnit
npm run test:report
```

## Checklist para PR / Commit

- [ ] Teste segue nomenclatura `cenario_XX_descricao.cy.js`
- [ ] Describe e it() têm descrições claras em português
- [ ] Toda lógica está em comandos customizados (não inline no teste)
- [ ] Correspondência com documentação em `Documentacao/cenarios_teste/`
- [ ] Teste passa localmente (`npm test`)
- [ ] Screenshots / videos para falhas documentadas
- [ ] Sem `console.log()` ou código comentado desnecessário
