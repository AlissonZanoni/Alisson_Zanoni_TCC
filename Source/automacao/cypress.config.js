const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.automationtesting.in',
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    requestTimeout: 5000,
    responseTimeout: 5000,
    pageLoadTimeout: 30000,
    supportFile: 'cypress/support/e2e.js',
    // Desabilitar chromeWebSecurity para evitar problemas de cross-origin em testes
    chromeWebSecurity: false,
    // Configurar reporters para gerar relatórios
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'cypress/results/junit-results-[hash].xml',
      outputs: true,
      rootSuiteTitle: 'Testes Automatizados - TCC',
      testsOrder: 'alphanumeric'
    },
    // Ignorar erros não capturados de scripts de terceiros (Google AdSense, Analytics, etc)
    onUncaughtException(err) {
      // Ignorar erros do Google AdSense
      if (err.message && err.message.includes('adsbygoogle')) {
        return true
      }
      // Ignorar erros de scripts de rastreamento
      if (err.message && (err.message.includes('gtag') || err.message.includes('ga('))) {
        return true
      }
      // Ignorar erros de scripts de terceiros (cross-origin)
      if (err.message && err.message.includes('Script error')) {
        return true
      }
      throw err
    }
  }
})
