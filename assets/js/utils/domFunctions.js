// SOLID

// Princípios de boas práticas de programação.

// S - SRP - Single Responsability Principle
// Princípio da Responsabilidade Única.

// Funções bem escritas devem ser mantidas simples, curtas e realizando um único objetivo.

// Quando precisamos usar uma função em outro arquivo, é necessário exportá-la.

// Quando for importar do arquico domFunctions o JS não sabe quantas funções estão disponíveis.
// Quando eu preciso extrair qualquer recurso, usamos a desestruturação
// import { addTask } from './domFunctions.js';

// CRUD - Create Read Update Delete
export function addTask() {
    alert("Cadastrando uma nova tarefa");
}

export function removeTask() {
    alert("Removendo uma tarefa");
}

export function updateTask() {
    alert("Alterando uma tarefa");
}

export function getAllTask() {
    alert("Listando todas tarefas");
}

export function getTaskById() {
    alert("Exibindo uma tarefa");
}
