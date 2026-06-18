const prompt = require("prompt-sync")();

let numeros = [];
let pares = 0;

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Digite um número inteiro: "));
  numeros.push(num);

  if (num % 2 === 0) {
    pares++;
  }
}

console.log("Números digitados:", numeros);
console.log("Quantidade de pares:", pares);