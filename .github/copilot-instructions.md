# GitHub Copilot Instructions

## Contexto do Projeto
Este projeto é um Trabalho de Conclusão de Curso (TCC) focado na comparação entre testes manuais e automatizados em um ambiente de desenvolvimento de software. O objetivo é avaliar eficiência, precisão e qualidade dos testes automatizados em relação aos manuais.

## Diretrizes para Sugestões
1. **Foco em Testes Automatizados**:
   - Priorizar sugestões relacionadas a ferramentas como Cypress, Selenium ou Robot Framework.
   - Gerar exemplos de código para automação de testes em aplicações web.

2. **Estilo de Código**:
   - Seguir boas práticas de codificação, como nomes de variáveis claros e funções bem documentadas.
   - Utilizar comentários explicativos em trechos de código relevantes.

3. **Organização do Projeto**:
   - Respeitar a estrutura de pastas existente:
     - Source/logs_tempo/: Controle de horas e logs.
     - Source/automacao/: Scripts de automação.
     - Documentacao/testes_manuais/: Documentação de testes manuais.
     - Documentacao/cenarios_teste/: Criação e detalhamento de cenários de teste.

4. **Restrições**:
   - Não sugerir alterações em arquivos acadêmicos LaTeX, como os da pasta `OverLeaf/`, a menos que solicitado explicitamente.
   - Evitar sugestões que não estejam alinhadas com o contexto acadêmico do projeto.

## Exemplos de Código
- Automação de testes com Cypress:
```javascript
describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://example.com');
    cy.get('#username').type('usuario_teste');
    cy.get('#password').type('senha_teste');
    cy.get('#login-button').click();
    cy.contains('Bem-vindo').should('be.visible');
  });
});
```

- Estrutura de um caso de teste manual:
```
# Caso de Teste: Login
- **Pré-condições**: Usuário deve estar registrado.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir credenciais válidas.
  3. Clicar no botão de login.
- **Resultado Esperado**: Login realizado com sucesso e redirecionamento para a página inicial.
```

## Notas Finais
Estas instruções podem ser ajustadas conforme o projeto evolui. Certifique-se de revisar e atualizar este arquivo regularmente para manter a consistência e a relevância das sugestões do Copilot.