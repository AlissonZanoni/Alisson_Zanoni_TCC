const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://practice.automationtesting.in',
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    requestTimeout: 5000,
    responseTimeout: 5000,
    pageLoadTimeout: 30000,
    supportFile: 'cypress/support/e2e.js',
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
      if (err.message.includes('adsbygoogle')) {
        return true
      }
      // Ignorar erros de scripts de rastreamento
      if (err.message.includes('gtag') || err.message.includes('ga(')) {
        return true
      }
      throw err
    }
  }
})
