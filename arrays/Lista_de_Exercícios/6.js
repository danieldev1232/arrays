const prompt = require("prompt-sync")();

let tarefas = [];

for (let i = 0; i < 5; i++) {
  let tarefa = prompt("Digite uma tarefa: ");
  tarefas.push(tarefa);
}

tarefas.shift();

console.log("Array atualizado:", tarefas);