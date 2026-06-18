const prompt = require("prompt-sync")();

let cidades = [];

for (let i = 0; i < 5; i++) {
  let cidade = prompt("Digite uma cidade: ");
  cidades.push(cidade);
}

let novaCidade = prompt("Digite mais uma cidade: ");
cidades.unshift(novaCidade);

console.log("Array atualizado:", cidades);