//faz uma funçao apos um delay definido, repetidamente
const tarefa = () => {
    console.log("Passoiy 1 seg!");
}

const id = setInterval(tarefa, 1000); //guardar a id pra poder cancelar


setTimeout(() => {
    clearInterval(id);
}, 5000);
//funçao sendo chamada passando dois argumentos:
//1 é uma funçao anonima, segundo é o delay 5000ms;
