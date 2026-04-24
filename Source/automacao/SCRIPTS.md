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
- **Função:** Executa testes em modo headed (com navegador visível) e captura screenshots quando falham.
- **Uso:** Para visualizar os testes rodando em tempo real, útil para observar comportamentos. Screenshots de falhas ficam em `cypress/screenshots/`.
- **Diferença de `test:open`:** `test:open` é interativo; `test:headed` roda todos do início ao fim automaticamente com navegador visível.
- **Screenshots:** Capturados automaticamente quando um teste falha (não em todos os passos, apenas nas falhas).

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

### `npm run test:video`
- **Comando:** `cypress run --video --reporter junit`
- **Função:** Executa testes, gera **vídeo da execução completa** + relatório JUnit XML.
- **Uso:** Captura evidência em vídeo + relatório estruturado. Mais rápido que `test:evidence` (sem headed).
- **Saída:** 
  - Vídeos: `cypress/videos/`
  - Relatório: `cypress/results/`
  - Screenshots de falhas: `cypress/screenshots/` (se houver)
- **Ideal para:** TCC, documentação de testes, análise de execução.

### `npm run test:evidence`
- **Comando:** `cypress run --headed --video --reporter junit`
- **Função:** Executa testes com **navegador visível** + **vídeo completo** + **relatório JUnit**.
- **Uso:** Evidência completa para TCC. Combine visualização em tempo real + vídeo + relatório.
- **Saída:** 
  - Navegador visível durante execução
  - Vídeos: `cypress/videos/`
  - Relatório: `cypress/results/`
  - Screenshots de falhas: `cypress/screenshots/` (se houver)
- **Ideal para:** Demonstração, validação visual + evidência documentada, documentação acadêmica.
- **Tempo:** ~2-5 minutos (mais lento que `test:video`, pois renderiza navegador)

---

## Scripts para Captura de Evidências (Screenshots e Vídeos)

### Capturar Screenshots em Testes com Falha (Padrão)
```bash
# Screenshots são capturados automaticamente em falhas
npm test
npm run test:headed
```
- **Local de saída:** `cypress/screenshots/`
- **Quando captura:** Apenas quando um teste falha (não em testes que passam)
- **Uso:** Útil para análise de erros e debug

### Capturar Vídeos de Toda Execução
```bash
# Executar testes com gravação de vídeo
npx cypress run --video

# Combinado com headed (visualizar + gravar vídeo)
npx cypress run --headed --video

# Gerar relatório JUnit + vídeo
npx cypress run --reporter junit --video
```
- **Local de saída:** `cypress/videos/`
- **Quando captura:** Todo o processo de execução de todos os testes
- **Tamanho:** Vídeos podem ser grandes (variam conforme duração dos testes)
- **Uso:** Evidência completa para TCC, demonstração, ou análise detalhada

### Capturar Screenshots de Cada Passo (Customizado)
Para capturar screenshots em TODOS os passos (não apenas falhas), use este comando:
```bash
# Capturar screenshot a cada cy.visit() e interação
npx cypress run --spec "cypress/e2e/minha_secao/**/*.cy.js" --env screenshotOnRunMode=true
```
- **Nota:** Requer configuração adicional no `cypress.config.js` (não implementada por padrão)
- **Alternativa:** Use `cy.screenshot()` manualmente nos testes para capturar pontos específicos

### Capturar Evidências Completas (Vídeo + Screenshots)
```bash
# Vídeos + screenshots de falhas
npx cypress run --headed --video

# Ainda melhor: vídeo + relatório + headed
npx cypress run --headed --video --reporter junit
```
- **Combinação ideal para TCC:** Fornece vídeo completo + screenshots de falhas + relatório estruturado

---

## Fluxo de Trabalho Recomendado

1. **Desenvolvimento:** `npm run test:open` — escrever e debugar testes interativamente.
2. **Validação Local:** `npm run test:headed` — ver testes em ação com navegador visível.
3. **Pre-commit:** `npm test` — rodar full suite em headless para confirmar que tudo passa.
4. **CI/CD:** `npm run test:report` — gerar e consumir relatório XML no pipeline.
5. **Captura de Vídeo (TCC):** `npm run test:video` — vídeo + relatório (rápido, sem navegador visível).
6. **Evidência Completa (TCC):** `npm run test:evidence` — vídeo + navegador visível + relatório (ideal para documentação).
7. **Dashboard:** `npm run test:dashboard` — opcional, para monitoramento contínuo.

---

## Exemplos de Uso

```bash
# Rodar todos os testes em headless (rápido, sem UI, screenshots de falhas)
npm test

# Abrir Test Runner interativo
npm run test:open

# Rodar com navegador visível (screenshots de falhas)
npm run test:headed

# Gerar relatório JUnit para CI/CD (screenshots de falhas)
npm run test:report

# Enviar para Cypress Dashboard (requer configuração prévia)
npm run test:dashboard

# ========================================
# SCRIPTS PARA CAPTURA DE EVIDÊNCIAS (TCC)
# ========================================

# Vídeo + relatório (rápido, recomendado)
npm run test:video

# Vídeo + navegador visível + relatório (evidência completa, mais lento)
npm run test:evidence

# ========================================
# Capturar VÍDEOS manualmente
# ========================================

# Vídeo da execução completa
npx cypress run --video

# Vídeo + navegador visível
npx cypress run --headed --video

# Vídeo + relatório JUnit
npx cypress run --video --reporter junit

# ========================================
# Capturar SCREENSHOTS
# ========================================

# Screenshots de falhas apenas (padrão em headless/headed)
npm test

# Fazer screenshot manual em teste específico
npx cypress run --spec "cypress/e2e/home_page/cenario_01_tres_sliders.cy.js"

# ========================================
# Rodar spec específico
# ========================================

# Spec específico
npx cypress run --spec "cypress/e2e/my_account_registration/**/*.cy.js"

# Spec específico em modo headed
npx cypress run --spec "cypress/e2e/home_page/cenario_01_sliders.cy.js" --headed

# Spec específico com vídeo
npx cypress run --spec "cypress/e2e/home_page/cenario_01_sliders.cy.js" --video

# Spec específico com evidência completa
npx cypress run --spec "cypress/e2e/home_page/cenario_01_sliders.cy.js" --headed --video --reporter junit

# ========================================
# Combinações Recomendadas para TCC
# ========================================

# Evidência rápida (vídeo + relatório)
npm run test:video

# Evidência completa (navegador visível + vídeo + relatório)
npm run test:evidence

# Teste rápido com screenshots de falhas
npm run test:report
```

---

## Notas Importantes

- **Headless vs Headed:** Headless é mais rápido; headed permite visualizar ações em tempo real.
- **reporter:** O JUnit XML é gerado em `cypress/results/` e pode ser integrado com ferramentas de CI.
- **Dashboard:** Requer token de acesso do Cypress Cloud; configure via `cypress run --record --key YOUR_KEY`.
- **Timeouts:** Por padrão, cada teste aguarda até 10 segundos por elemento; ajuste em `cypress.config.js` se necessário.

---

## Locais de Armazenamento de Evidências

| Tipo | Pasta | Quando é criado | Tamanho típico |
|------|-------|-----------------|---|
| **Screenshots** | `cypress/screenshots/` | Quando teste falha ou via `cy.screenshot()` | ~100-500 KB por imagem |
| **Vídeos** | `cypress/videos/` | Com flag `--video` | ~1-10 MB por teste (depende duração) |
| **Relatórios** | `cypress/results/` | Com `--reporter junit` | ~50-100 KB por XML |

---

## Recomendações para TCC

### Para Documentação e Evidência Rápida:
```bash
# Vídeo + relatório (recomendado para TCC - rápido e completo)
npm run test:video
```
- Gera vídeo completo da execução: `cypress/videos/`
- Gera relatório XML: `cypress/results/`
- Screenshots de falhas: `cypress/screenshots/` (se houver)
- **Tempo:** ~1-2 minutos (mais rápido, sem navegador visível)
- **Ideal para:** Documentação de TCC, análise de testes

### Para Demonstração e Evidência Completa:
```bash
# Navegador visível + vídeo + relatório (evidência máxima)
npm run test:evidence
```
- Permite acompanhar execução em tempo real
- Captura vídeo para revisão posterior: `cypress/videos/`
- Captura relatório XML: `cypress/results/`
- Screenshots de falhas: `cypress/screenshots/` (se houver)
- **Tempo:** ~2-5 minutos (mais lento, renderiza navegador)
- **Ideal para:** Demonstração ao professor, análise detalhada, vídeo didático

### Para Testes Rápidos (sem evidência de vídeo):
```bash
# Rápido, com relatório e screenshots de falhas
npm run test:report
```
- Screenshots de falhas apenas
- Sem vídeo (muito mais rápido)
- Relatório XML
- **Tempo:** ~30 segundos a 1 minuto

---

## Troubleshooting

### "Video not found" ou "Videos not recording"
- Certifique-se de usar `--video` no comando
- Verifique se há espaço em disco (vídeos podem ser grandes)
- Pasta `cypress/videos/` será criada automaticamente

### "Screenshots não aparecem mesmo com falhas"
- Screenshots são capturados apenas quando há **falhas**
- Se todos os testes passam, nenhum screenshot é criado
- Use `cy.screenshot()` manualmente para forçar capturas

### Vídeos muito grandes
- Vídeos de longa duração podem usar bastante espaço
- Considere limpar `cypress/videos/` periodicamente
- Use apenas `--video` quando necessário

### Relatórios não aparecem
- Verifique permissões de escrita na pasta `cypress/results/`
- Certifique-se de usar `--reporter junit`
- Arquivos XML são criados com nome hash aleatório: `junit-results-[hash].xml`
