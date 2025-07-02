#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Caminho do arquivo de configuração (vai criar no diretório onde o usuário rodar o comando)
const configFilePath = path.resolve(process.cwd(), '.ng-shortcut.json');

// Aliases padrão caso não tenha arquivo .ng-shortcut.json
const defaultAliases = {
  'perfil': 'modulos/usuario/perfil',
  'config': 'modulos/usuario/perfil/configuracoes',
  'home': 'modulos/home'
};

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Use: ng-shortcut <alias/nome-do-componente> ou ng-shortcut init');
  process.exit(1);
}

if (args[0] === 'init') {
  // Cria arquivo .ng-shortcut.json com aliases padrão, se não existir
  if (fs.existsSync(configFilePath)) {
    console.log('Arquivo .ng-shortcut.json já existe neste diretório.');
  } else {
    fs.writeFileSync(configFilePath, JSON.stringify(defaultAliases, null, 2));
    console.log('Arquivo .ng-shortcut.json criado com aliases padrão.');
  }
  process.exit(0);
}

// Se não for init, pega o argumento que seria o caminho curto
const arg = args[0];

// Lê aliases do arquivo .ng-shortcut.json se existir, senão usa o padrão
let aliases;
if (fs.existsSync(configFilePath)) {
  try {
    aliases = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'));
  } catch (e) {
    console.error('Erro ao ler o arquivo .ng-shortcut.json:', e.message);
    process.exit(1);
  }
} else {
  aliases = defaultAliases;
}

// Divide o argumento em partes (ex: 'perfil/meu-componente')
const parts = arg.split('/');

// Verifica se o primeiro pedaço é um alias conhecido
const prefix = parts[0];
const rest = parts.slice(1).join('/');

if (aliases[prefix]) {
  // Concatena o caminho completo
  const fullPath = `${aliases[prefix]}${rest ? '/' + rest : ''}`;

  // Monta o comando Angular CLI
  const cmd = `ng g c ${fullPath}`;

  console.log(`Executando: ${cmd}`);

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });

} else {
  console.error(`Alias '${prefix}' não encontrado.`);
  console.log('Aliases disponíveis:', Object.keys(aliases).join(', '));
  process.exit(1);
}
