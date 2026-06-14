# Automação de Testes - TCC

## Descrição
Este projeto contém testes automatizados com Cypress para validar cenários de teste da aplicação web `http://practice.automationtesting.in/`.

## Estrutura do Projeto
```
automacao/
├── cypress/
│   ├── e2e/                                    # Testes end-to-end
│   │   ├── home_page/                          # Testes de Home Page (5 cenários)
│   │   ├── shop/                               # Testes da Loja (11 cenários)
│   │   ├── carrinho/                           # Testes do Carrinho (12 cenários)
│   │   ├── my_account_login/                   # Testes de Login (8 cenários)
│   │   ├── my_account_registration/            # Testes de Registro (9 cenários)
│   │   ├── my_account/                         # Testes da Área Logada (5 cenários)
│   │   ├── my_account_account_details/         # Testes de Detalhes da Conta (5 cenários)
│   │   └── my_account_addresses/               # Testes de Endereços (15 cenários)
│   └── support/                                # Arquivos de suporte
│       ├── home_page/                          # Comandos da Home Page
│       │   └── commands.js
│       ├── shop/                               # Comandos da Loja
│       │   └── commands.js
│       ├── carrinho/                           # Comandos do Carrinho
│       │   └── commands.js
│       ├── my_account_login/                   # Comandos de Login
│       │   └── commands.js
│       ├── my_account_registration/            # Comandos de Registro
│       │   └── commands.js
│       ├── my_account/                         # Comandos da Área Logada
│       │   └── commands.js
│       ├── my_account_account_details/         # Comandos de Detalhes da Conta
│       │   └── commands.js
│       ├── my_account_addresses/               # Comandos de Endereços
│       │   └── commands.js
│       ├── commands.js                         # Comandos globais
│       └── e2e.js                              # Configuração global
├── cypress.config.js                           # Configuração do Cypress
├── package.json                                # Dependências do projeto
└── README.md                                   # Este arquivo
```

## Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (versão 8 ou superior)
- PowerShell com ExecutionPolicy permitindo scripts (consulte a seção de Troubleshooting)

### Passos

1. Navegue até a pasta do projeto:
   ```bash
   cd Source/automacao
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Troubleshooting

### 1. Erro: "A execução de scripts foi desabilitada neste sistema"
Se você receber um erro semelhante a:
```
npx : O arquivo C:\Program Files\nodejs\npx.ps1 não pode ser carregado porque a execução
de scripts foi desabilitada neste sistema.
```

**Solução**: Altere a política de execução do PowerShell:

```powershell
# Verificar a política atual
Get-ExecutionPolicy

# Alterar para RemoteSigned (recomendado)
Set-ExecutionPolicy RemoteSigned

# Confirmar a alteração
Get-ExecutionPolicy
```

Isso permitirá que scripts npm rodem no PowerShell.

### 2. Node.js/npm não instalado
Se `npm` ou `node` não forem reconhecidos após a instalação, **reinicie o computador ou abra um novo terminal**. Isso garante que as variáveis de ambiente sejam carregadas corretamente.

### 3. Erros de scripts de terceiros em testes
Se testes falharem com erros de Google AdSense ou Google Analytics, isso é esperado em headless mode. Os testes já possuem configuração para ignorar esses erros (veja `cypress/support/home_page/commands.js`).

### 4. Seletores CSS não encontram elementos
Se um teste falha com "Expected to find element", é provável que o seletor CSS esteja incorreto. Use `npm run test:open` para abrir a UI interativa e inspecionar os elementos da página usando as ferramentas de desenvolvedor do navegador.

## Execução dos Testes

### Modo Headless (sem interface)
```bash
npm test
```

### Modo Interactive (com interface do Cypress)
```bash
npm run test:open
```

### Modo Headed (com navegador visível)
```bash
npm run test:headed
```

## Testes Disponíveis

### Home Page (`cypress/e2e/home_page/`)
- `cenario_01_sliders.cy.js` — Verificar três sliders na página inicial
- `cenario_02_arrivals.cy.js` — Verificar produtos em "New Arrivals"
- `cenario_03_imagens_arrivals_navegacao.cy.js` — Navegação pelas imagens de arrivals
- `cenario_04_preco_add_to_basket.cy.js` — Preço e botão "Add to Basket"
- `cenario_05_validar_header.cy.js` — Validar estrutura do header

### Shop (`cypress/e2e/shop/`)
- `cenario_01_validar_header.cy.js` — Validar header da loja
- `cenario_02_validar_categorias.cy.js` — Validar categorias disponíveis
- `cenario_03_filtro_popularidade.cy.js` — Ordenar por popularidade
- `cenario_04_filtro_avaliacoes.cy.js` — Ordenar por avaliações
- `cenario_05_filtro_novidades.cy.js` — Ordenar por novidades
- `cenario_06_filtro_preco_crescente.cy.js` — Ordenar por preço crescente
- `cenario_07_filtro_preco_decrescente.cy.js` — Ordenar por preço decrescente
- `cenario_08_filtrar_preco_alcance.cy.js` — Filtrar por faixa de preço
- `cenario_09_promocao.cy.js` — Verificar produtos em promoção
- `cenario_10_exibicao_produtos.cy.js` — Exibição dos produtos
- `cenario_11_redirecionamento_produto.cy.js` — Redirecionamento para página do produto

### Carrinho (`cypress/e2e/carrinho/`)
- `cenario_01_adicionar_produto_carrinho.cy.js` — Adicionar produto ao carrinho
- `cenario_02_estrutura_pagina_carrinho.cy.js` — Validar estrutura da página do carrinho
- `cenario_03_atualizar_quantidade_produto.cy.js` — Atualizar quantidade de produto
- `cenario_04_remover_produto_carrinho.cy.js` — Remover produto do carrinho
- `cenario_05_validar_calculo_total_final.cy.js` — Validar cálculo do total final
- `cenario_06_multiplos_produtos_carrinho.cy.js` — Adicionar múltiplos produtos
- `cenario_07_quantidade_multipla_mesmo_produto.cy.js` — Quantidade múltipla do mesmo produto
- `cenario_08_aplicar_cupom_invalido.cy.js` — Aplicar cupom inválido
- `cenario_09_checkout_carrinho_cheio.cy.js` — Checkout com carrinho cheio
- `cenario_10_quantidade_zero_remove_produto.cy.js` — Quantidade zero remove produto
- `cenario_11_checkout_logado.cy.js` — Checkout com usuário logado
- `cenario_12_limite_maximo_produtos.cy.js` — Limite máximo de produtos

### My Account - Login (`cypress/e2e/my_account_login/`)
- `cenario_01_login_valido.cy.js` — Login com credenciais válidas
- `cenario_02_login_incorretos.cy.js` — Login com credenciais incorretas
- `cenario_03_login_senha_vazia.cy.js` — Login com senha vazia
- `cenario_04_login_usuario_vazio.cy.js` — Login com usuário vazio
- `cenario_05_login_usuario_e_senha_vazios.cy.js` — Login com campos vazios
- `cenario_06_senha_mascarada.cy.js` — Verificar máscara de senha
- `cenario_07_login_case_sensitive.cy.js` — Login case sensitive
- `cenario_08_login_checkbox_remember_me.cy.js` — Checkbox "Remember Me"

### My Account - Registro (`cypress/e2e/my_account_registration/`)
- `cenario_01_registro.cy.js` — Registro com dados válidos
- `cenario_02_registro_email_invalido.cy.js` — Registro com e-mail inválido
- `cenario_03_registro_email_vazio.cy.js` — Registro com e-mail vazio
- `cenario_04_registro_senha_vazia.cy.js` — Registro com senha vazia
- `cenario_05_registro_email_e_senha_vazios.cy.js` — Registro com campos vazios
- `cenario_06_registro_senha_muito_fraca.cy.js` — Senha muito fraca
- `cenario_07_registro_senha_fraca.cy.js` — Senha fraca
- `cenario_08_registro_senha_medio.cy.js` — Senha média
- `cenario_09_registro_senha_forte.cy.js` — Senha forte

### My Account - Área Logada (`cypress/e2e/my_account/`)
- `cenario_01_dashboard.cy.js` — Validar dashboard
- `cenario_02_visualizar_pedidos.cy.js` — Visualizar pedidos
- `cenario_03_endereco.cy.js` — Visualizar endereço
- `cenario_04_editar_endereco_envio.cy.js` — Editar endereço de envio
- `cenario_05_logout.cy.js` — Logout

### My Account - Detalhes da Conta (`cypress/e2e/my_account_account_details/`)
- `cenario_01_validar_estrutura.cy.js` — Validar estrutura da página
- `cenario_02_validar_dados_pessoais.cy.js` — Validar dados pessoais
- `cenario_03_validar_email_invalido.cy.js` — Validar e-mail inválido
- `cenario_04_erro_senhas_diferentes.cy.js` — Erro ao inserir senhas diferentes
- `cenario_05_senha_atual_necessaria.cy.js` — Exigência de senha atual

### My Account - Endereços (`cypress/e2e/my_account_addresses/`)
- `cenario_01_validar_estrutura.cy.js` — Validar estrutura da página
- `cenario_02_editar_billing.cy.js` — Editar endereço de cobrança
- `cenario_03_editar_shipping.cy.js` — Editar endereço de envio
- `cenario_04_billing_salvar_completo.cy.js` — Salvar billing completo
- `cenario_05_billing_campos_obrigatorios_vazios.cy.js` — Campos obrigatórios de billing vazios
- `cenario_06_billing_email_invalido.cy.js` — E-mail inválido no billing
- `cenario_07_billing_telefone_invalido.cy.js` — Telefone inválido no billing
- `cenario_08_billing_troca_pais_estados.cy.js` — Troca de país e estados no billing
- `cenario_09_billing_campos_opcionais.cy.js` — Campos opcionais do billing
- `cenario_10_billing_salvar_sem_alteracoes.cy.js` — Salvar billing sem alterações
- `cenario_11_shipping_salvar_completo.cy.js` — Salvar shipping completo
- `cenario_12_campos_obrigatorios_vazios_shipping.cy.js` — Campos obrigatórios de shipping vazios
- `cenario_13_troca_pais_estados_shipping.cy.js` — Troca de país e estados no shipping
- `cenario_14_campos_opcionais_shipping.cy.js` — Campos opcionais do shipping
- `cenario_15_salvar_shipping_sem_alteracoes.cy.js` — Salvar shipping sem alterações

## Estrutura de Um Teste

```javascript
describe('Descrição do teste', () => {
  beforeEach(() => {
    // Setup antes de cada teste
  });

  it('Deve fazer algo específico', () => {
    // Ações e validações do teste
  });
});
```

## Seletores Utilizados

Os seletores usados são baseados na estrutura HTML da aplicação:
- `.carousel-inner .carousel-item` - Elementos dos sliders
- `.carousel-inner .carousel-item img` - Imagens dos sliders

## Comandos Customizados

Os comandos customizados estão organizados por seção em `cypress/support/[secao]/commands.js`.

### Home Page
```javascript
cy.navigateToHomePage()              // Navega para a home page
cy.verifySliderCount(3)              // Verifica quantidade de sliders
cy.verifySliderImages(3)             // Verifica imagens nos sliders
cy.verifyAllSlidersVisible()         // Verifica visibilidade de todos os sliders
```

### Shop
```javascript
cy.navigateToShop()                  // Acessa a loja
cy.filterByPrice(150, 450)           // Filtra produtos por preço
cy.sortProducts(sortOption)          // Ordena produtos
cy.viewCart()                        // Visualiza carrinho
```

### Carrinho
```javascript
cy.addProductToCart(productName)     // Adiciona produto ao carrinho
cy.updateProductQuantity(qty)        // Atualiza quantidade de produto
cy.removeProductFromCart()           // Remove produto do carrinho
cy.proceedToCheckout()               // Procede ao checkout
cy.applyCoupon(code)                 // Aplica cupom
```

### My Account - Login
```javascript
cy.navigateToLoginPage()             // Acessa página de login
cy.loginWithCredentials(user, pass)  // Faz login
cy.verifyLoginSuccess()              // Verifica sucesso no login
cy.verifyLoginErrorMessage(msg)      // Verifica mensagem de erro
```

### My Account - Área Logada
```javascript
cy.navigateToDashboard()             // Acessa dashboard
cy.navigateToOrders()                // Acessa pedidos
cy.navigateToAddresses()             // Acessa endereços
cy.navigateToAccountDetails()        // Acessa detalhes da conta
cy.logout()                          // Faz logout
```

### My Account - Detalhes da Conta
```javascript
cy.navigateToAccountDetails()        // Acessa detalhes da conta
cy.updateAccountDetails(data)        // Atualiza dados pessoais
cy.verifyAccountDetailsError(msg)    // Verifica mensagem de erro
```

### My Account - Endereços
```javascript
cy.navigateToAddressesPage()         // Acessa página de endereços
cy.editBillingAddress(data)          // Edita endereço de cobrança
cy.editShippingAddress(data)         // Edita endereço de envio
cy.saveBillingAddress()              // Salva endereço de cobrança
cy.saveShippingAddress()             // Salva endereço de envio
```

## Adicionando Novos Testes

1. Identifique a seção do teste (home_page, my_account_login, etc)
2. Crie um novo arquivo na respectiva pasta: `cypress/e2e/[secao]/cenario_XX_descricao.cy.js`
3. Estruture o teste seguindo o padrão dos testes existentes
4. Execute o teste para validar:
   ```bash
   npm run test:open
   ```

## Documentação Útil

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress API](https://docs.cypress.io/api/table-of-contents)

## Autor
AlissonZanoni

## Licença
MIT
