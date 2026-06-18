const prompt = require("prompt-sync")();

let nomes = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite um nome: ");
  nomes.push(nome);
}

let novoNome = prompt("Digite mais um nome: ");
nomes.push(novoNome);

console.log("Array atualizado:", nomes);