//elementos interativos

const formulario = document.querySelector("form");
const checkboxGeral = document.querySelector("#checkbox-todos"); //# pq é id
const botaoFiltroTodos = document.querySelector("#botao-todas");
const botaoFiltroAFazer = document.querySelector("#botao-a-fazer");
const botaoFiltroFeitas = document.querySelector("#botao-feitas");
const botaoLimparFeitas = document.querySelector("#botao-limpar");

// demais elementos
const listaAFazer = document.querySelector(".a-fazer");
const listaFeitas = document.querySelector(".feitas");
const input = document.querySelector("#input-tarefa");
const contador = document.querySelector("#contador")

function atualizarContador() {
    const contagem = listaAFazer.querySelectorAll("li").length;

    if (contagem === 1) {
        contador.innerText = "1 item a fazer"
    } else {
        contador.innerText = `${contagem} itens a fazer `
    }
}

function atualizarCheckboxGeral() {
    const contagemAFazer = listaAFazer.querySelectorAll("li").length;
    const contagemFeitas = listaFeitas.querySelectorAll("li").length;

    if (contagemAFazer === 0 && contagemFeitas > 0) {
        checkboxGeral.checked = true
    } else {
        checkboxGeral.checked = false
    }
}

formulario.addEventListener("submit", event => {
    event.preventDefault(); //é um formulario qro q continue na mesma pag, evito uma funçao padrao do submit

    //adicionando uma tarefa
    const elementoTarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", () => {
        //marcar ou desmarcar uma tarefa como feita
    })

    // ouvinte
    const elementoTexto = document.createElement("span");
    elementoTexto.innerText = input.value;

    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";
    botaoDeDeletar.addEventListener("click", () => {
        elementoTarefa.remove();
        atualizarContador();
        atualizarCheckboxGeral();
    })


    checkbox.addEventListener("input", () => {
        //deletar uma tarefa
        if (checkbox.checked) {
            listaFeitas.append(elementoTarefa);
        } else {
            listaAFazer.append(elementoTarefa);
        }

        atualizarContador();
        atualizarCheckboxGeral();
    });



    elementoTarefa.append(checkbox);
    elementoTarefa.append(elementoTexto);
    elementoTarefa.append(botaoDeDeletar);

    listaAFazer.append(elementoTarefa);

    input.value = "";
    atualizarContador()


});

checkboxGeral.addEventListener("input", () => {
    //marcando ou desmarcnando todas as tarefas ao msm tempo
    if (checkboxGeral.checked) {
        const tarefasAFazer = listaAFazer.querySelectorAll("li");
        for (const tarefaAFazer of tarefasAFazer) {
            listaFeitas.append(tarefaAFazer);

            const checkbox = tarefaAFazer.querySelector("input");
            checkbox.checked = true;
        }
    } else {
        const tarefasFeitas = listaFeitas.querySelectorAll("li");
        for (const tarefaFeita of tarefasFeitas) {
            listaAFazer.append(tarefaFeita);

            const checkbox = tarefaFeita.querySelector("input");
            checkbox.checked = false;
        }

    }

    atualizarContador();
    atualizarCheckboxGeral();
});

botaoFiltroTodos.addEventListener("click", () => {
    listaAFazer.removeAttribute("hidden");
    listaFeitas.removeAttribute("hidden");

    botaoFiltroTodos.classList.add("ativo");
    botaoFiltroAFazer.classList.remove("ativo");
    botaoFiltroFeitas.classList.remove("ativo");

    //exibir todas as tarefas
});
botaoFiltroAFazer.addEventListener("click", () => {
    listaFeitas.setAttribute("hidden", "");
    listaAFazer.removeAttribute("hidden");

    botaoFiltroTodos.classList.remove("ativo");
    botaoFiltroAFazer.classList.add("ativo");
    botaoFiltroFeitas.classList.remove("ativo");
    //exibir apenas as tarefas a fazer
});
botaoFiltroFeitas.addEventListener("click", () => {
    listaAFazer.setAttribute("hidden", "");
    listaFeitas.removeAttribute("hidden");

    botaoFiltroTodos.classList.remove("ativo");
    botaoFiltroAFazer.classList.remove("ativo");
    botaoFiltroFeitas.classList.add("ativo");

    //exibir apenas as tarefas feitas
});

botaoLimparFeitas.addEventListener("click", () => {
    //limpar as feitas
    const tarefasFeitas = listaFeitas.querySelectorAll("li");
    for (const tarefaFeita of tarefasFeitas) {
        tarefaFeita.remove();
    }

    atualizarCheckboxGeral();

});