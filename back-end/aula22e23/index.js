//LISTA DE TAREFAS - TAREFINHA

/**
 * Tarefa
 * Lista de Tarefas
 */
const Koa = require("koa");
const bodyParser = require("koa-bodyparser"); // -> ctx.request.body;

const server = new Koa();

server.use(bodyParser());

const tarefa = {
    titulo: "Preparar aula",
    descricao: "Aula do dia 2",
    concluida: true,
    deletado: false
};
const listaDeTarefas = [
    {
        titulo: "Preparar aula",
        descricao: "Aula do dia 2",
        concluida: true,
        deletado: false
    }
];

const obterListaDeTarefas = () => {
    const listaSemDeletadas = [];

    for (let i = 0; i < listaDeTarefas.length; i++) {
        if (listaDeTarefas[i].deletado === false) {
            listaSemDeletadas.push(listaDeTarefas[i]);
        }
    }
    return listaSemDeletadas;
};

const obterTarefa = (index) => {
    const tarefa = listaDeTarefas[index];
    if (tarefa) {
        return tarefa
    } else {
        return null;
    }
}

const adicionarTarefa = (tarefa) => {
    const novaTarefa = {
        titulo: tarefa.titulo ? tarefa.titulo : "Tarefa sem titulo",//verifico se existe, senao existir, retorna vazio
        descricao: tarefa.descricao ? tarefa.descricao : "Descriçao sem titulo",
        concluida: tarefa.concluida ? tarefa.concluida : false,
        deletado: false

    };
    listaDeTarefas.push(novaTarefa);

    return novaTarefa;
}
/**
 * Adicionar uma nova tarefa (CRIAR) - POST
 * Deletar/Remover atv (DELETAR) - DELETE
 * Atualizar o status de concluida (ATUALIZAR) - PUT
 * Lista a lista de tarefas (OBTER) - GET [x]
 */
server.use((ctx) => {
    const path = ctx.url; //caminho sendo obtido
    const method = ctx.method;

    if (path === "/tarefas") {
        if (method === "GET") {
            ctx.body = obterListaDeTarefas();
        } else if (method === "POST") {
            //pegar as informações do body da requisição -> add koa-bodyparser
            const tarefa = adicionarTarefa(ctx.request.body)
            ctx.body = tarefa;
        } else {
            ctx.status = 404,
                ctx.body = "Não encontrado!"
        }
    } else {
        ctx.status = 404;
        ctx.body = "Não encontrado!"
    };

});

server.listen(8081, () => {
    console.log("Rodando na porta 8081!")
})