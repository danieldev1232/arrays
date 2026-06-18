const prompt = require("prompt-sync")();

let filmes = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt("Digite o nome de um filme: ");
  filmes.push(filme);
}

console.log("Primeiro filme:", filmes[0]);
console.log("Último filme:", filmes[filmes.length - 1]);
console.log("Quantidade de filmes:", filmes.length);