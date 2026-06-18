const prompt = require("prompt-sync")();

let produtos = [];

for (let i = 0; i < 5; i++) {
  let produto = prompt("Digite um produto: ");
  produtos.push(produto);
}

produtos.pop();

console.log("Array atualizado:", produtos);