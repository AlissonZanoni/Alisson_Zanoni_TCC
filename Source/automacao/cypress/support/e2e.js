// ===================================
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
// ===================================

// Import commands from all sections and scenarios
// IMPORTANTE: Importar comandos globais PRIMEIRO
import './commands'
import './home_page/commands'
import './home_page/cenario_01_sliders'
import './home_page/cenario_02_arrivals'
import './home_page/cenario_03_imagens_arrivals_navegacao'
import './home_page/cenario_04_preco_add_to_basket'
import './home_page/cenario_05_validar_header'
import './shop/commands'
import './shop/cenario_01_validar_header'
import './shop/cenario_02_validar_categorias'
import './shop/cenario_03_validar_filtro_popularidade'
import './shop/cenario_04_validar_filtro_avaliacoes'
import './shop/cenario_05_validar_filtro_novidades'
import './shop/cenario_06_validar_filtro_preco_crescente'
import './shop/cenario_07_validar_filtro_preco_decrescente'
import './shop/cenario_08_filtrar_preco_alcance'
import './shop/cenario_09_validar_promocao'
import './shop/cenario_10_exibicao_produtos'
import './shop/cenario_11_validar_redirecionamento_produto'
import './my_account_login/commands'
import './my_account_login/cenario_01_login_valido'
import './my_account_login/cenario_03_login_senha_vazia'
import './my_account_login/cenario_04_login_usuario_vazio'
import './my_account_login/cenario_05_login_usuario_e_senha_vazios'
import './my_account_login/cenario_08_login_checkbox_remember_me'
import './my_account_registration/commands'
import './my_account_registration/cenario_01_registro'
import './my_account_registration/cenario_02_registro_email_invalido'
import './my_account/commands'
import './my_account_account_details/commands'
import './my_account_account_details/cenario_01_validar_estrutura'
import './my_account_account_details/cenario_02_validar_dados_pessoais'
import './my_account_account_details/cenario_03_validar_email_invalido'
import './my_account_account_details/cenario_04_erro_senhas_diferentes'
import './my_account_account_details/cenario_05_senha_atual_necessaria'
import './my_account_addresses/commands'
import './my_account_addresses/cenario_01_validar_estrutura'
import './my_account_addresses/cenario_02_editar_billing'
import './my_account_addresses/cenario_03_editar_shipping'
import './my_account_addresses/cenario_04_a_10_formulario'

// Ignorar erros não capturados de scripts de terceiros (Google AdSense, Analytics, etc)
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar erros do Google AdSense
  if (err.message.includes('adsbygoogle') || err.message.includes('Cannot read')) {
    return false
  }
  // Ignorar erros de scripts de rastreamento
  if (err.message.includes('gtag') || err.message.includes('ga(')) {
    return false
  }
  // Ignorar erros de scripts de terceiros (cross-origin e CORS)
  if (err.message.includes('Script error') || err.message.includes('CORS')) {
    return false
  }
  // Ignorar erros genéricos de undefined ou null
  if (err.message.includes('Cannot') || err.message.includes('is not defined')) {
    return false
  }
  // Deixar outros erros falharem normalmente
  return true
})

// Hide fetch/XHR requests
const app = window.top

if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style')
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none } '
  style.setAttribute('data-hide-command-log-request', '')

  app.document.head.appendChild(style)
}
