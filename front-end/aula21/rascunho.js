const checkboxTodas = document.querySelector(".checkbox-todas");
const inputNovaTarefa = document.querySelector(".nova-tarefa");
const cabecalhoForm = document.querySelector(".cabecalho");
const elementoItens = document.querySelector(".contador span");
const filtroTodas = document.querySelector(".filtros .todas");
const filtroAFazer = document.querySelector(".filtros .a-fazer");
const filtroCompletadas = document.querySelector(".filtros .completadas");
const limparCompletadas = document.querySelector(".limpar-completadas");

const elementoTarefasAFazer = document.querySelector(".tarefas.a-fazer");
const elementoTarefasCompletadas = document.querySelector(".tarefas.completadas");

function atualizarInterface() {
    const qtdAFazer = elementoTarefasAFazer.querySelectorAll("li").length;
    const qtdCompletadas = elementoTarefasCompletadas.querySelectorAll("li").length;

    if (qtdAFazer === 1) {
        elementoItens.innerText = "1 item";
    } else {
        elementoItens.innerText = `${qtdAFazer} itens`;
    }

    if (qtdAFazer > 0) {
        checkboxTodas.checked = false;
    } else if (qtdCompletadas > 0) {
        checkboxTodas.checked = true;
    } else {
        checkboxTodas.checked = false;
    }
}

checkboxTodas.addEventListener("input", event => {
    if (checkboxTodas.checked) {
        for (const tarefa of elementoTarefasAFazer.querySelectorAll("li")) {
            elementoTarefasCompletadas.append(tarefa);
            tarefa.querySelector("input").checked = true;
        }
    } else {
        for (const tarefa of elementoTarefasCompletadas.querySelectorAll("li")) {
            elementoTarefasAFazer.append(tarefa);
            tarefa.querySelector("input").checked = false;
        }
    }

    atualizarInterface();
});

cabecalhoForm.addEventListener("submit", event => {
    event.preventDefault();

    const elementoTarefa = document.createElement("li");

    const checkboxTarefa = document.createElement("input");
    checkboxTarefa.setAttribute("type", "checkbox");
    checkboxTarefa.addEventListener("input", () => {
        if (checkboxTarefa.checked) {
            elementoTarefasCompletadas.append(elementoTarefa);
        } else {
            elementoTarefasAFazer.append(elementoTarefa);
        }

        atualizarInterface();
    });

    const conteudoTarefa = document.createElement("span");
    conteudoTarefa.innerText = inputNovaTarefa.value;

    const botaoDeletarTarefa = document.createElement("button");
    botaoDeletarTarefa.innerText = "Deletar";
    botaoDeletarTarefa.addEventListener(
        "click",
        () => {
            elementoTarefa.remove();
            atualizarInterface();
        }
    );

    elementoTarefa.append(checkboxTarefa);
    elementoTarefa.append(conteudoTarefa);
    elementoTarefa.append(botaoDeletarTarefa);

    elementoTarefasAFazer.append(elementoTarefa);

    inputNovaTarefa.value = "";
    atualizarInterface();
});

filtroTodas.addEventListener("click", () => {
    filtroTodas.classList.add("ativa");
    filtroAFazer.classList.remove("ativa");
    filtroCompletadas.classList.remove("ativa");

    elementoTarefasAFazer.removeAttribute("hidden");
    elementoTarefasCompletadas.removeAttribute("hidden");
});

filtroAFazer.addEventListener("click", () => {
    filtroTodas.classList.remove("ativa");
    filtroAFazer.classList.add("ativa");
    filtroCompletadas.classList.remove("ativa");

    elementoTarefasAFazer.removeAttribute("hidden");
    elementoTarefasCompletadas.setAttribute("hidden", "");
});

filtroCompletadas.addEventListener("click", () => {
    filtroTodas.classList.remove("ativa");
    filtroAFazer.classList.remove("ativa");
    filtroCompletadas.classList.add("ativa");

    elementoTarefasAFazer.setAttribute("hidden", "");
    elementoTarefasCompletadas.removeAttribute("hidden");
});

limparCompletadas.addEventListener("click", () => {
    elementoTarefasCompletadas.innerHTML = "";
    atualizarInterface();
});
