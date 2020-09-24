const form = document.querySelector("form");
const input = document.querySelector("input");
const aFazer = document.querySelector(".a-fazer");
const feitas = document.querySelector(".feitas");

function deletarTarefa(event) {
    const botaoDeDeletar = event.target;
    const tarefa = botaoDeDeletar.closest("li");
    //vai pegar o li ancestral mais perto do botao
    tarefa.remove() //vai apagar o li q for mais proximo
}

function marcarComoFeita(event) {
    const checkbox = event.target;
    const tarefa = checkbox.closest("li");
    //vai pegar o li ancestral mais perto do botao


    //para colocar a tarefa na lista correta(feitas ou a-fazer)
    if (checkbox.checked) {
        feitas.append(tarefa);
    } else {
        aFazer.append(tarefa);
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();//p n deixar o formulario enviar o dado e sair da pagina

    //add elemento na lista de coisas a fazer
    //criar um elemento
    const tarefa = document.createElement("li"); //crie o elemento do tipo li

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", marcarComoFeita);

    const texto = document.createElement("span");
    texto.innerText = input.value;

    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";
    botaoDeDeletar.addEventListener("click", deletarTarefa);

    tarefa.append(checkbox);//add o checkbox dentro do tarefa, vira filho dele
    tarefa.append(texto);
    tarefa.append(botaoDeDeletar);

    //qro colocar a tarefa dentro da lista de tarefas a fazer
    aFazer.append(tarefa);

    input.value = ""; //p dps q escrever o campo de texto ficar vazio

});

//colocar um ouvinte de click no botao p ele tabaiar


