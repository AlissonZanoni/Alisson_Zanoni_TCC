const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.automationtesting.in',
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    // ==========================================
    // CONFIGURAÇÕES DE ESTABILIDADE
    // ==========================================
    // Timeouts aumentados para evitar falhas em conexões lentas
    defaultCommandTimeout: 20000,  // 20s - para comandos complexos
    requestTimeout: 20000,          // 20s - para requisições HTTP
    responseTimeout: 30000,         // 30s - para resposta do servidor
    pageLoadTimeout: 60000,         // 60s - para carregamento de página
    
    // Retries automáticos para testes instáveis
    retries: {
      runMode: 3,    // Tentar 3 vezes no modo headless
      openMode: 0   // Não retries no modo interativo
    },
    
    // Configuração de vídeo para debug
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    
    // Limpar estado entre testes para evitar interferência
    trashAssetsBeforeRuns: true,
    
    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false,
    
    // ==========================================
    // REPORTER CONFIGURATION
    // ==========================================
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'cypress/results/junit-results-[hash].xml',
      outputs: true,
      rootSuiteTitle: 'Testes Automatizados - TCC',
      testsOrder: 'alphanumeric'
    },
    
    // ==========================================
    // ERROR HANDLING
    // ==========================================
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
