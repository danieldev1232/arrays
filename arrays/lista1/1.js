const prompt = require('prompt-sync')();
let jogos =  ["GTA VI", "Call of Duty", "Minecraft", "Fortnite", "Valorant"];
let numero;
numero = Number(prompt("Digite um número de 0 a 4 para escolher um jogo:"));

if (numero >= 0 && numero <= 4) {

console.log(`O jogo escolhido foi: ${jogos[numero]}`);
} else {
    console.log("Número inválido. Por favor, digite um número de 0 a 4.");
}
