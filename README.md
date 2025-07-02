# ng-shortcut-cli

> **ng-shortcut-cli** é uma CLI simples e eficiente para encurtar caminhos na criação de componentes Angular.  
> Ideal para projetos com estruturas complexas e profundas, onde navegar por caminhos longos pode ser cansativo.

---

## 🚀 Visão Geral

Criar componentes no Angular pode demandar digitar caminhos extensos e repetitivos, especialmente em projetos grandes com múltiplos níveis de pastas.  

**ng-shortcut-cli** permite que você use **aliases** — atalhos que representam caminhos completos — para gerar componentes com muito mais rapidez e praticidade.

---

## 🎯 Funcionalidades

- Mapear aliases para caminhos completos no seu projeto Angular  
- Gerar componentes usando o Angular CLI com um comando simplificado  
- Criar e editar um arquivo JSON de configuração para personalizar aliases  
- Facilitar o desenvolvimento e aumentar a produtividade  
- Fácil de configurar e estender conforme a estrutura do seu projeto  

---

## 📦 Instalação

Você pode instalar o **ng-shortcut-cli** globalmente via npm para usar em qualquer projeto Angular:

```bash
npm install -g ng-shortcut-cli

⚙️ Como Usar
Inicializar arquivo de configuração (init)
No diretório raiz do seu projeto Angular, execute para criar o arquivo padrão de aliases:

ng-shortcut init
Isso cria um arquivo chamado ng-shortcut.config.json com exemplos de aliases:

{
  "perfil": "modulos/usuario/perfil",
  "config": "modulos/usuario/perfil/configuracoes",
  "home": "modulos/home"
}
Edite esse arquivo para personalizar os aliases conforme a sua estrutura de pastas.

Criar componentes usando aliases
Para gerar um componente Angular usando um alias definido, execute:

ng-shortcut <alias>/<nome-do-componente>
ng-shortcut perfil/meu-componente

O comando vai expandir o alias para o caminho completo e chamar o Angular CLI para criar o componente.
