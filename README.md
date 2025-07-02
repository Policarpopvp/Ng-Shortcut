# ng-st

> **ng-st** é uma CLI simples e eficiente para encurtar caminhos na criação de componentes Angular.  
> Ideal para projetos com estruturas complexas e profundas, onde a navegação por caminhos longos pode ser um incômodo.

---

## 🚀 Visão Geral

Criar componentes no Angular pode demandar digitar caminhos extensos e repetitivos, especialmente em projetos grandes com múltiplos níveis de pastas.  

**ng-st** resolve isso ao permitir que você utilize **aliases** — atalhos que representam caminhos completos — para gerar componentes com muito mais rapidez e praticidade.

---

## 🎯 Funcionalidades

- Mapear aliases para caminhos completos no seu projeto Angular
- Gerar componentes usando o Angular CLI com um comando simplificado
- Facilitar o desenvolvimento e aumentar a produtividade
- Fácil de configurar e extender conforme a estrutura do seu projeto

---

## 💻 Como Usar

1. Clone ou baixe o repositório.
2. Garanta que você tenha o [Node.js](https://nodejs.org/) e o [Angular CLI](https://angular.io/cli) instalados globalmente.
3. Navegue até a pasta do projeto Angular onde quer criar o componente.
4. Execute o comando passando o alias e o nome do componente:

```bash
node ng-st.js <alias>/<nome-do-componente>
