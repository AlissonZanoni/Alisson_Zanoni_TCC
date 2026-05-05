# Gabarito dos Testes Automatizados — TCC

**Data de execução:** 04/05/2026  
**Ferramenta:** Cypress 15.x  
**Total de cenários:** 70  
**Passaram:** 63 | **Falharam esperadas:** 7 *(todas por design — Bug-Tracking)*

---

## Legenda

| Símbolo | Significado |
|---------|-------------|
| ✅ | Passou |
| 🐛 | Falhou por design (Bug-Tracking documentado) — falha **esperada e intencional** |

---

## 1. Home Page

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Página inicial com apenas três sliders | ✅ |
| 02 | Página inicial com exatamente quatro "Arrivals" *(Bug-Tracking)* | 🐛 |
| 03 | Imagens em "Arrivals" devem navegar corretamente | ✅ |
| 04 | Verificação do preço e botão ADD TO BASKET no Arrival | ✅ |
| 05 | Validar o header da página | ✅ |

**Resultado:** 4/5 passaram ✅ | 1 falha documentada como bug 🐛

---

## 2. Shop (Loja)

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Validar o header da página | ✅ |
| 02 | Validar as categorias dos produtos | ✅ |
| 03 | Validar filtro por Popularidade | ✅ |
| 04 | Validar filtro por Avaliações | ✅ |
| 05 | Validar filtro por Novidades | ✅ |
| 06 | Validar filtro por Preço Crescente | ✅ |
| 07 | Validar filtro por Preço Decrescente | ✅ |
| 08 | Filtrar por Alcance de Preço | ✅ |
| 09 | Promoção | ✅ |
| 10 | Exibição dos Produtos com destaque de promoção na primeira fileira *(Bug-Tracking)* | 🐛 |
| 11 | Redirecionamento para o Produto | ✅ |

**Resultado:** 10/11 passaram ✅ | 1 falha documentada como bug 🐛

---

## 3. My Account — Login

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Login com credenciais válidas | ✅ |
| 02 | Login com credenciais incorretas | ✅ |
| 03 | Login com senha vazia | ✅ |
| 04 | Login com usuário vazio | ✅ |
| 05 | Login com usuário e senha vazios | ✅ |
| 06 | Senha deve ser mascarada | ✅ |
| 07 | Diferenciação maiúsculas/minúsculas | ✅ |
| 08 | Checkbox Remember me marcado por padrão *(Bug-Tracking)* | 🐛 |

**Resultado:** 7/8 passaram ✅ | 1 falha documentada como bug 🐛

---

## 4. My Account — Registro

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Criar conta | ✅ |
| 02 | Registro com e-mail inválido | ✅ |
| 03 | E-mail vazio — botão Register deve estar desabilitado *(Bug-Tracking)* | 🐛 |
| 04 | Senha vazia — botão Register deve estar desabilitado *(Bug-Tracking)* | 🐛 |
| 05 | E-mail e senha vazios — botão Register deve estar desabilitado *(Bug-Tracking)* | 🐛 |
| 06 | Registro de senha muito fraca | ✅ |
| 07 | Registro de senha fraca | ✅ |
| 08 | Registro de senha média | ✅ |
| 09 | Registro de senha forte | ✅ |

**Resultado:** 6/9 passaram ✅ | 3 falhas documentadas como bugs 🐛

> **Nota:** Os cenários 03, 04 e 05 são testes de Bug-Tracking. Eles falham intencionalmente para documentar que o botão "Register" deveria estar desabilitado quando campos obrigatórios estão vazios, porém o sistema atual mantém o botão habilitado (comportamento incorreto).

---

## 5. My Account — Área Logada

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Dashboard | ✅ |
| 02 | Visualizar Pedidos | ✅ |
| 03 | Visualizar Endereço | ✅ |
| 04 | Editar Endereço de Envio | ✅ |
| 05 | Logout | ✅ |

**Resultado:** 5/5 passaram ✅

---

## 6. My Account — Account Details

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Validar estrutura do formulário de edição de conta | ✅ |
| 02 | Validar atualização de dados pessoais (first name e last name) | ✅ |
| 03 | Validar que e-mail inválido é rejeitado | ✅ |
| 04 | Erro ao mudar senha com confirmação diferente | ✅ |
| 05 | Validar que senha atual é necessária para mudança de senha | ✅ |

**Resultado:** 5/5 passaram ✅

---

## 7. My Account — Addresses

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Validar estrutura da página de Addresses | ✅ |
| 02 | Validar navegação — Editar Billing Address | ✅ |
| 03 | Validar navegação — Editar Shipping Address | ✅ |
| 04 | Salvar Billing Address com sucesso (fluxo feliz) | ✅ |
| 05 | Campos obrigatórios vazios (validações) — Billing | ✅ |
| 06 | E-mail inválido — Billing | ✅ |
| 07 | Telefone inválido — Billing | ✅ |
| 08 | Troca de país atualiza lista de estados — Billing | ✅ |
| 09 | Campos opcionais aceitos (Company, Address 2) — Billing | ✅ |
| 10 | Salvar sem alterações — Billing | ✅ |
| 11 | Salvar Shipping Address com sucesso (fluxo feliz) | ✅ |
| 12 | Campos obrigatórios vazios — Shipping (validações) | ✅ |
| 13 | Troca de país atualiza lista de estados — Shipping | ✅ |
| 14 | Campos opcionais aceitos — Shipping | ✅ |
| 15 | Salvar Shipping sem alterações | ✅ |

**Resultado:** 15/15 passaram ✅

---

## 8. Carrinho de Compras

| Cenário | Descrição | Resultado |
|---------|-----------|-----------|
| 01 | Adicionar um produto ao carrinho (fluxo feliz) | ✅ |
| 02 | Validar estrutura da página do carrinho | ✅ |
| 03 | Atualizar quantidade de um produto no carrinho | ✅ |
| 04 | Remover um produto do carrinho | ✅ |
| 05 | Validar cálculo do total final | ✅ |
| 06 | Adicionar múltiplos produtos ao carrinho | ✅ |
| 07 | Adicionar quantidade maior de um mesmo produto | ✅ |
| 08 | Aplicar código de cupom inválido | ✅ |
| 09 | Prosseguir para checkout com carrinho cheio | ✅ |
| 10 | Atualizar quantidade para zero e remover | ✅ |
| 11 | Prosseguir para checkout logado | ✅ |
| 12 | Validar limite máximo de produtos no carrinho *(Bug-Tracking)* | 🐛 |

**Resultado:** 11/12 passaram ✅ | 1 falha documentada como bug 🐛

> **Nota:** O cenário 12 documenta que o sistema não impõe limite máximo de quantidade por produto no carrinho — comportamento incorreto que deve ser identificado pelo QA.

---

## Resumo Geral

| Seção | Total | Passou | Falhou |
|-------|-------|--------|--------|
| Home Page | 5 | 4 | 1 🐛 |
| Shop | 11 | 10 | 1 🐛 |
| My Account — Login | 8 | 7 | 1 🐛 |
| My Account — Registro | 9 | 6 | 3 🐛 |
| My Account — Área Logada | 5 | 5 | 0 |
| My Account — Account Details | 5 | 5 | 0 |
| My Account — Addresses | 15 | 15 | 0 |
| Carrinho de Compras | 12 | 11 | 1 🐛 |
| **TOTAL** | **70** | **63** | **7** 🐛 |

**Taxa de sucesso (cenários funcionais):** 63/63 = **100%** ✅  
**Bugs rastreados:** 7 cenários com falha esperada e intencional (Bug-Tracking)

> Todos os 7 cenários que falharam são testes de Bug-Tracking — falhas **planejadas** para documentar comportamentos incorretos do sistema. O objetivo é garantir que esses bugs sejam detectados de forma consistente e automatizada, servindo como testes de regressão: quando o bug for corrigido, o teste passará automaticamente.
