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
// IMPORTANTE: Importar commands comuns ANTES dos cenários específicos
import './home_page/commands'
import './home_page/cenario_01_tres_sliders'
import './home_page/cenario_02_arrivals'
import './my_account_login/commands'
import './my_account_registration/commands'
import './my_account/commands'
import './shop/commands'

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
