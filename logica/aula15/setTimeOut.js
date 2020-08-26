//setTimeout(tarefa, 3000); 
//tarefa é funçao
//3000 = 3s, delay pr tarefa ocorrer

const tarefa = () => {
    console.log("Passaram-se 3 segundos!");
}

console.log("Iniciando contagem");
setTimeout(tarefa, 3000);
console.log("Contagem já iniciada.")
//consegue agendar uma tarefa