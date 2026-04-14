# Scripts do Package.json - Documentação

## Descrição dos scripts de teste disponíveis

### `npm test`
- **Comando:** `cypress run`
- **Função:** Executa todos os testes em modo headless (sem interface gráfica) no Electron.
- **Uso:** Ideal para CI/CD, pipelines de automação, ou quando você quer rodar tudo rapidamente sem visualização.
- **Saída:** Exibe resultado no terminal com resumo de testes (pass/fail).

### `npm run test:open`
- **Comando:** `cypress open`
- **Função:** Abre o Cypress Test Runner com interface interativa.
- **Uso:** Use para debugar, escrever novos testes, inspecionar elementos, ou executar specs manualmente.
- **Interface:** Permite selecionar specs, visualizar execução em tempo real, acessar DevTools do navegador.

### `npm run test:headed`
- **Comando:** `cypress run --headed`
- **Função:** Executa testes em modo headed (com navegador visível) em headless mode.
- **Uso:** Para visualizar os testes rodando em tempo real, útil para observar comportamentos e capturar screenshots/vídeos.
- **Diferença de `test:open`:** `test:open` é interativo; `test:headed` roda todos do início ao fim automaticamente com navegador visível.

### `npm run test:report`
- **Comando:** `cypress run --reporter junit`
- **Função:** Executa testes e gera relatório em formato JUnit XML.
- **Uso:** Integração com sistemas de CI/CD que consomem XML (GitHub Actions, Jenkins, GitLab CI, etc).
- **Saída:** Arquivo XML em `cypress/results/` com detalhes de cada teste (pass/fail/duration).

### `npm run test:report:headed`
- **Comando:** `cypress run --headed --reporter junit`
- **Função:** Combina `test:headed` + relatório JUnit — executa com navegador visível e gera XML.
- **Uso:** Quando você quer visualizar a execução E gerar relatório simultaneamente.
- **Nota:** Mais lento que `test:report`, útil para validação visual antes de commitar.

### `npm run test:dashboard`
- **Comando:** `cypress run --record`
- **Função:** Executa testes e envia resultados para Cypress Dashboard (https://dashboard.cypress.io).
- **Uso:** Monitoramento centralizado, histórico de testes, análise de flakiness, integração com GitHub/GitLab.
- **Pré-requisito:** Requer autenticação Cypress Cloud (`cypress run --record --key <YOUR_RECORD_KEY>`).
- **Nota:** Não funciona sem credenciais válidas ou sem ter projeto vinculado ao Cypress Dashboard.

---

## Fluxo de Trabalho Recomendado

1. **Desenvolvimento:** `npm run test:open` — escrever e debugar testes interativamente.
2. **Validação Local:** `npm run test:headed` — ver testes em ação com navegador visível.
3. **Pre-commit:** `npm test` — rodar full suite em headless para confirmar que tudo passa.
4. **CI/CD:** `npm run test:report` — gerar e consumir relatório XML no pipeline.
5. **Dashboard:** `npm run test:dashboard` — opcional, para monitoramento contínuo.

---

## Exemplos de Uso

```bash
# Rodar todos os testes em headless (rápido, sem UI)
npm test

# Abrir Test Runner interativo
npm run test:open

# Rodar com navegador visível
npm run test:headed

# Gerar relatório JUnit para CI/CD
npm run test:report

# Enviar para Cypress Dashboard (requer configuração prévia)
npm run test:dashboard

# Rodar spec específico
npx cypress run --spec "cypress/e2e/my_account_registration/**/*.cy.js"

# Rodar em modo headed com spec específico
npx cypress run --spec "cypress/e2e/home_page/cenario_01_sliders.cy.js" --headed
```

---

## Notas Importantes

- **Headless vs Headed:** Headless é mais rápido; headed permite visualizar ações em tempo real.
- **reporter:** O JUnit XML é gerado em `cypress/results/` e pode ser integrado com ferramentas de CI.
- **Dashboard:** Requer token de acesso do Cypress Cloud; configure via `cypress run --record --key YOUR_KEY`.
- **Timeouts:** Por padrão, cada teste aguarda até 10 segundos por elemento; ajuste em `cypress.config.js` se necessário.
