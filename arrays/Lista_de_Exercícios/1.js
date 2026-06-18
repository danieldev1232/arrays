const prompt = require('prompt-sync')();
const numeros = [];

for (let i = 0; i < 6; i++) {
    const numero = Number(prompt(`Digite o "${i + 1}"º numero: `));
    numeros.push(numero);
}

console.log(`Os números digitados foram: ${numeros.join(', ')}`);
console.log('A quantidade de numeros positivos é: ' + numeros.filter(num => num >= 0).length);
console.log('A quantidade de numeros negativos é: ' + numeros.filter(num => num < 0).length);