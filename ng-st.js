#!/usr/bin/env node
const { exec } = require('child_process');

// Mapeamento dos aliases para caminhos completos
const aliases = {
  'perfil': 'modulos/usuario/perfil',
  'config': 'modulos/usuario/perfil/configuracoes',
  'home': 'modulos/home',
  // adicione mais conforme sua estrutura ou apague os ja existentes se desnecessário
};

// Recebe o caminho curto via argumentos
const arg = process.argv[2];

if (!arg) {
  console.error('Use: node ng-shortcut.js <alias/nome-do-componente>');
  process.exit(1);
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
}
