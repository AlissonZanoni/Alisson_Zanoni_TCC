# Automação de Testes - TCC

## Descrição
Este projeto contém testes automatizados com Cypress para validar cenários de teste da aplicação web `http://practice.automationtesting.in/`.

## Estrutura do Projeto
```
automacao/
├── cypress/
│   ├── e2e/                              # Testes end-to-end
│   │   ├── home_page/                    # Testes de Home Page
│   │   │   ├── cenario_01_tres_sliders.cy.js
│   │   │   ├── cenario_02_arrivals.cy.js
│   │   │   └── ... mais cenários
│   │   ├── my_account_login/             # Testes de Login
│   │   │   ├── cenario_01_login.cy.js
│   │   │   └── ... mais cenários
│   │   ├── my_account_registration/      # Testes de Registro
│   │   │   ├── cenario_01_registro.cy.js
│   │   │   └── ... mais cenários
│   │   ├── my_account/                   # Testes da Área Logada
│   │   │   ├── cenario_01_dashboard.cy.js
│   │   │   └── ... mais cenários
│   │   ├── shop/                         # Testes da Loja
│   │   │   ├── cenario_01_filtrar_preco.cy.js
│   │   │   └── ... mais cenários
│   │   └── support/                      # Arquivos de suporte
│   │       ├── home_page/                # Comandos da Home Page
│   │       │   └── commands.js
│   │       ├── my_account_login/         # Comandos de Login
│   │       │   └── commands.js
│   │       ├── my_account_registration/  # Comandos de Registro
│   │       │   └── commands.js
│   │       ├── my_account/               # Comandos da Área Logada
│   │       │   └── commands.js
│   │       ├── shop/                     # Comandos da Loja
│   │       │   └── commands.js
│   │       └── e2e.js                    # Configuração global
│   └── cypress.config.js                 # Configuração do Cypress
├── package.json                          # Dependências do projeto
├── README.md                             # Este arquivo
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

### Home Page
- **Cenário 01**: Verificar se a página inicial possui exatamente três sliders
  - Arquivo: `cypress/e2e/home_page/cenario_01_tres_sliders.cy.js`
  - Validações:
    - Presença de 3 sliders
    - Visibilidade dos sliders
    - Presença de imagens em cada slider

### My Account - Login
- Testes de autenticação e login de usuários
  - Localização: `cypress/e2e/my_account_login/`

### My Account - Registro
- Testes de registro e criação de conta
  - Localização: `cypress/e2e/my_account_registration/`

### My Account - Área Logada
- Testes de funcionalidades após login (Dashboard, Pedidos, Endereços, etc)
  - Localização: `cypress/e2e/my_account/`

### Loja
- Testes de funcionalidades da loja (Filtros, Ordenação, Carrinho, etc)
  - Localização: `cypress/e2e/shop/`

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

Os comandos customizados estão organizados por seção e facilitam o desenvolvimento dos testes. Alguns exemplos:

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
cy.filterByPrice(150, 450)          // Filtra produtos por preço
cy.addProductToCart(productName)    // Adiciona produto ao carrinho
cy.sortProducts(sortOption)          // Ordena produtos
cy.viewCart()                        // Visualiza carrinho
cy.proceedToCheckout()              // Procede ao checkout
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
