# GitHub Copilot Instructions

## Contexto do Projeto
Este projeto é um Trabalho de Conclusão de Curso (TCC) focado na comparação entre testes manuais e automatizados em um ambiente de desenvolvimento de software. O objetivo é avaliar eficiência, precisão e qualidade dos testes automatizados em relação aos manuais.

## Diretrizes para Sugestões
1. **Foco em Testes Automatizados**:
   - Priorizar sugestões relacionadas a ferramentas como Cypress, Selenium ou Robot Framework.
   - Gerar exemplos de código para automação de testes em aplicações web.

2. **Estilo de Código**:
   - Seguir boas práticas de codificação, como nomes de variáveis claros e funções bem documentadas.
   - Utilizar comentários explicativos em trechos de código relevantes.

3. **Organização do Projeto**:
   - Respeitar a estrutura de pastas existente:
     - Source/logs_tempo/: Controle de horas e logs.
     - Source/automacao/: Scripts de automação.
     - Documentacao/testes_manuais/: Documentação de testes manuais.
     - Documentacao/cenarios_teste/: Criação e detalhamento de cenários de teste.
   
   - **Nomenclatura de Scripts de Automação**:
     - Usar nomenclatura em PORTUGUÊS para manter consistência com a documentação de cenários.
     - Padrão: `cenario_XX_descricao_do_teste.cy.js` (ex: `cenario_01_tres_sliders.cy.js`)
     - Estrutura de pastas: `cypress/e2e/[secao]/`, onde secao corresponde ao arquivo de cenários (home_page, shop, my_account_login, etc.)
     - Cada pasta deve conter os testes de uma seção específica, mirrorando a estrutura de `Documentacao/cenarios_teste/`.

4. **Restrições**:
   - Não sugerir alterações em arquivos acadêmicos LaTeX, como os da pasta `OverLeaf/`, a menos que solicitado explicitamente.
   - Evitar sugestões que não estejam alinhadas com o contexto acadêmico do projeto.

## Exemplos de Código
- Automação de testes com Cypress:
```javascript
describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://example.com');
    cy.get('#username').type('usuario_teste');
    cy.get('#password').type('senha_teste');
    cy.get('#login-button').click();
    cy.contains('Bem-vindo').should('be.visible');
  });
});
```

- Estrutura de um caso de teste manual:
```
# Caso de Teste: Login
- **Pré-condições**: Usuário deve estar registrado.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir credenciais válidas.
  3. Clicar no botão de login.
- **Resultado Esperado**: Login realizado com sucesso e redirecionamento para a página inicial.
```

## Notas Finais
Estas instruções podem ser ajustadas conforme o projeto evolui. Certifique-se de revisar e atualizar este arquivo regularmente para manter a consistência e a relevância das sugestões do Copilot.

## Instruções Específicas por Pasta

Para detalhes específicos sobre as pastas de testes e suporte, consulte os arquivos:

- **[.github/instructions/testes-e2e.md](.github/instructions/testes-e2e.md)** — Guia completo para desenvolvimento de testes em `cypress/e2e/`
  - Estrutura de pastas e nomenclatura de cenários
  - Padrão de desenvolvimento de specs (.cy.js)
  - Mapeamento: Documentação → Teste Automatizado
  - Casos especiais (HTML5 validation, força de senha, bug-tracking)
  - Checklist para PR/Commit

- **[.github/instructions/cypress-support.md](.github/instructions/cypress-support.md)** — Guia completo para desenvolvimento de commands em `cypress/support/`
  - Organização em três níveis (global, seção, cenário)
  - Padrão de nomeação descritiva
  - Estrutura e boas práticas de implementação
  - Tratamento de validações HTML5 e indicadores de força
  - Exemplo completo de seção (My Account Registration)
  - Checklist e troubleshooting

## Observações Importantes para Desenvolvimento

### Configuração do Ambiente
1. **Node.js e npm**:
   - Versão mínima recomendada: Node.js 18+, npm 8+
   - Após instalar, reinicie o computador ou abra um novo terminal para que as variáveis de ambiente sejam carregadas
   - Verifique a instalação com: `node --version` e `npm --version`

2. **PowerShell ExecutionPolicy**:
   - Se receber erro "A execução de scripts foi desabilitada", altere a política com:
     ```powershell
     Set-ExecutionPolicy RemoteSigned
     ```
   - Isso permite que scripts npm rodem no PowerShell sem problemas

3. **Cypress Configuration**:
   - Versão fixa no package.json: `15.13.0` (sem caracteres como `^` ou `~`)
   - Isso garante compatibilidade e evita quebras por atualizações futuras
   - Seletores CSS podem variar de versão para versão, sempre validar durante testes

### Problemas Comuns e Soluções
1. **Erros de scripts de terceiros (Google AdSense, Analytics)**:
   - Esperado em testes headless
   - Solução: Usar `cy.intercept()` para bloquear scripts problemáticos
   - Exemplo: `cy.intercept('**/pagead/js/adsbygoogle.js', { statusCode: 404 })`

2. **Seletores CSS incorretos**:
   - Usar `npm run test:open` para UI interativa
   - Inspecionar elementos com DevTools do navegador
   - Validar seletores antes de criar os testes

3. **node_modules não deve ser versionado**:
   - Adicionar ao .gitignore: `node_modules/`, `package-lock.json`, `yarn.lock`
   - Usuários devem rodar `npm install` após clonar o repositório

### Estrutura de Testes
1. **Comandos customizados** devem ser organizados por seção em `cypress/support/[secao]/commands.js`
2. **Testes** devem estar em `cypress/e2e/[secao]/cenario_XX_descricao.cy.js`
3. Ambas as estruturas espelham `Documentacao/cenarios_teste/`

### Mapeamento Passo-a-Passo: Documentação → Teste Automatizado
**REGRA FUNDAMENTAL**: Cada passo da documentação manual deve corresponder a uma função customizada no teste automatizado.

**Exemplo de Alinhamento**:

Documentação em `Documentacao/cenarios_teste/home_page.txt`:
```
1. Página inicial com apenas três sliders.
   Passos:
   1. Abra o navegador.
   2. Insira a URL "http://practice.automationtesting.in/".
   3. Clique no menu "Shop".
   4. Agora clique no botão do menu "Home".
   5. Verifique se a página inicial possui apenas três sliders.
   6. A página inicial deve conter exatamente três sliders.
```

Comandos em `cypress/support/home_page/commands.js`:
```javascript
// Passos 1-2: Abra o navegador e insira a URL
Cypress.Commands.add('abrirNavigadorEInserirURL', () => {
  cy.intercept('**/pagead/js/adsbygoogle.js', { statusCode: 404 })
  cy.visit('http://practice.automationtesting.in/')
})

// Passo 3: Clique no menu "Shop"
Cypress.Commands.add('clicarNoMenuShop', () => {
  cy.contains('a', 'Shop').click()
  cy.wait(1000)
})

// Passo 4: Clique no botão do menu "Home"
Cypress.Commands.add('clicarNoMenuHome', () => {
  cy.contains('a', 'Home').click()
  cy.wait(1000)
})

// Passo 5-6: Verifique se a página possui três sliders
Cypress.Commands.add('verificarQuantidadeSliders', (expectedCount) => {
  cy.get('.carousel-item').should('have.length', expectedCount)
})

Cypress.Commands.add('verificarSlidersVisiveis', () => {
  cy.get('.carousel-item').each(($slider) => {
    cy.wrap($slider).should('be.visible')
  })
})
```

Teste em `cypress/e2e/home_page/cenario_01_tres_sliders.cy.js`:
```javascript
describe('Home Page - Cenário 01: Página inicial com apenas três sliders', () => {
  it('Deve verificar se a página inicial possui exatamente três sliders', () => {
    // Passo 1-2: Abra o navegador e insira a URL
    cy.abrirNavigadorEInserirURL()
    
    // Passo 3: Clique no menu "Shop"
    cy.clicarNoMenuShop()
    
    // Passo 4: Clique no botão do menu "Home"
    cy.clicarNoMenuHome()
    
    // Passo 5: Verifique se a página inicial possui apenas três sliders
    cy.verificarQuantidadeSliders(3)
    
    // Passo 6: A página inicial deve conter exatamente três sliders (validação final)
    cy.verificarSlidersVisiveis()
  });
});
```

**Benefícios desta Abordagem**:
- ✅ Rastreabilidade 100% entre documentação manual e teste automatizado
- ✅ Facilita auditoria e comparação manual vs automatizado para o TCC
- ✅ Cada função é reutilizável em múltiplos cenários
- ✅ Código legível e manutenível
- ✅ Comentários explícitos de qual passo está sendo testado