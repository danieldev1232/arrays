const prompt = require("prompt-sync")();

let filmes = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt("Digite um filme: ");
  filmes.push(filme);
}

console.log("Filmes cadastrados:", filmes);

let posicao = Number(prompt("Digite a posição do filme que deseja alterar: "));
let novoFilme = prompt("Digite o novo nome do filme: ");

filmes[posicao - 1] = novoFilme;

console.log("Array atualizado:", filmes);