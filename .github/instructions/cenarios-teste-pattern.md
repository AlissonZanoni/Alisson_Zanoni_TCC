# Padrão de Escrita de Cenários de Teste

## Objetivo
Documento que estabelece o padrão para criar cenários de teste coerentes, mensuráveis e alinhados com boas práticas de QA.

## Estrutura Padrão de um Cenário

### ✅ Formato Correto
```
N. [Título Descritivo do Cenário]
   Pré-condições:
   - [Se houver estado prévio necessário]
   
   Passos:
   1. [Ação 1]
   2. [Ação 2]
   3. [Ação 3]
   ...
   
   Resultado Esperado:
   - [Comportamento esperado específico]
   - [Indicador visual/técnico a validar]
```

### ❌ Padrão Incorreto
```
1. Login
   Passos:
   1. Abra o navegador
   2. Insira a URL
   ...
   5. [Sem espaço para resultado esperado]
```

## Princípios Principais

### 1. **Antes de "Passos", declare "Pré-condições"**
Se o cenário depende de um estado anterior (estar logado, ter pedidos, etc), declare explicitamente:

**Exemplo correto:**
```
2. Visualizar Pedidos
   Pré-condições:
   - Usuário deve estar autenticado e logado
   
   Passos:
   1. Clique no link "My Account"
   2. Clique no link "Orders"
   ...
   
   Resultado Esperado:
   - Página de pedidos deve exibir lista de pedidos anteriores
```

### 2. **Resultado Esperado deve ser ESPECÍFICO**
❌ Ruim: "O usuário deve visualizar o Dashboard"
✅ Bom: "O Dashboard deve exibir saudação personalizada (Hello [nome do usuário]), link para editar endereço, link para Order History, link para mudar senha"

### 3. **Evitar Repetição de Setup (Login)**
Se 5 cenários começam com login, não repita em cada um. Declare como pré-condição:

**Pré-condições reutilizáveis:**
- Usuário autenticado e na página de Dashboard
- Usuário possui pelo menos 1 pedido anterior
- Usuário com endereço de cobrança preenchido

### 4. **Numeração de Passos**
- Sempre começar em 1
- Incrementar de forma linear (1, 2, 3, 4...)
- Sem pular números
- Sem subcapas (não usar 1.1, 1.2)

### 5. **Clareza do Título**
**Cenários bons:**
- "Editar Endereço de Envio"
- "Visualizar Detalhes do Pedido"
- "Mudar Senha da Conta"

**Cenários ruins:**
- "Endereço"
- "Dados"
- "Conta"

### 6. **Dados de Entrada (Massa de Testes)**
Se o cenário usa dados específicos, declare-os:

**Exemplo:**
```
5. Atualizar Endereço com Dados Válidos
   Pré-condições:
   - Usuário autenticado
   - Página de edição de endereço aberta
   
   Dados de Entrada:
   - Rua: Rua Exemplo, 123
   - Cidade: Santos
   - CEP: 11080-100
   - País: Brasil
   
   Passos:
   1. Preencher campo "Rua" com "Rua Exemplo, 123"
   2. Preencher campo "Cidade" com "Santos"
   ...
```

## Mapeamento para Testes Automatizados

### Pré-condições → Antes do Describe
```javascript
// Pré-condição: Usuário autenticado
describe('My Account - Área Logada - Cenário 02: Visualizar Pedidos', () => {
  before(() => {
    cy.acessarPaginaLogin()
    cy.fazerLoginComCredenciais('usuario@test.com', 'SenhaValida123')
  })
```

### Passos → Corpo do Teste
```javascript
  it('Deve exibir lista de pedidos anteriores', () => {
    // Passos do cenário
    cy.clicarNoPrototipoDashboard()
    cy.clicarNoLinkOrders()
    // ...
  })
```

### Resultado Esperado → Assertions (cy.verify...())
```javascript
    // Resultado esperado
    cy.verificarListaPedidosVisivelEPopulada()
    cy.verificarBotãoViewDisponivel()
})
```

## Checklist para Validar um Cenário

- ✅ Título é descritivo e específico?
- ✅ Pré-condições estão claramente definidas?
- ✅ Passos são numerados de forma linear?
- ✅ Cada passo é uma ação única (não composto)?
- ✅ Resultado esperado é ESPECÍFICO e mensurável?
- ✅ Não há repetição desnecessária de setup?
- ✅ Dados de entrada (massa de testes) estão declarados?
- ✅ Fluxo faz sentido do ponto de vista do usuário?

## Exemplos Completos

### ❌ Exemplo Ruim (Cenário Atual de My Account)
```
2. Pedidos
   Passos:
   1. Abra o navegador.
   2. Insira a URL "http://practice.automationtesting.in/".
   3. Clique no menu "My Account".
   4. Insira o nome de usuário registrado...
   5. Insira a senha...
   6. Clique no botão de login.
   7. O usuário deve fazer login com sucesso na página da web.
   8. Clique no link "My Account".
   9. Clique no link "Orders".
   10. O usuário deve visualizar seus pedidos ao clicar no link "Orders".
```

**Problemas:**
- Passos 1-7 são setup que deviam ser pré-condição
- Passo 10 combina ação + resultado esperado
- Falta especificidade: "visualizar seus pedidos" — como devem aparecer?

### ✅ Exemplo Bom (Padrão Recomendado)
```
2. Visualizar Histórico de Pedidos
   Pré-condições:
   - Usuário autenticado e logado no Dashboard
   - Usuário possui pelo menos 1 pedido anterior
   
   Passos:
   1. Clique no link "My Account" no Dashboard
   2. Clique no link "Orders"
   
   Resultado Esperado:
   - Página de Orders deve carregar corretamente
   - Deve exibir tabela com colunas: Order #, Date, Status, Actions
   - Cada pedido deve ter botão "View" disponível
   - Informações de pedidos anteriores devem estar listadas
```

**Melhorias:**
- Setup movido para pré-condições
- Apenas 2 passos funcionais
- Resultado esperado é específico e testável
- Fácil de mapear para automação

## Integração com Automação (Cypress)

Cada pré-condição, passo e resultado esperado deve ter um comando correlato:

| Documentação | Automação (Cypress) |
|--------------|---------------------|
| Pré-condição: "Usuário autenticado" | `before(() => { cy.autenticar() })` |
| Passo: "Clique no link Orders" | `cy.clicarNoLinkOrders()` |
| Resultado: "Tabela de pedidos visível" | `cy.verificarTabelaPedidosVisivelEPopulada()` |

---

## Notas Finais

- **Documentação clara facilita testes manuais E automatizados**
- **Evite repetições desnecessárias usando pré-condições**
- **Resultados esperados específicos reduzem interpretações erradas**
- **Revise cenários antes de automatizar — economia de tempo garantida**
