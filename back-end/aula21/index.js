const koa = require('koa'); //pedindo permissao p usar o Koa
const server = new koa(); //cria uma nova instancia do koa, permitindo usar funções/propriedades dele

server.use(async (ctx) => { //.use tds as funcionalidades sao em volta dele
    ctx.body = 'Olá, mundo!'; //seu argumento contem a funçao q define o comportamento do servidor ao receber qlqr requisiçao

    if (ctx.originalUrl === "/world") {
        ctx.body = "Olá, Mundo!"
    } else if (ctx.originalUrl === "/cubos") {
        ctx.body = "Olá, Cubos!"
    }


    console.log("Requisição para:", ctx.originalUrl);
});

server.listen(8081, () => {
    console.log("Servidor está rodando!")

}); //2 argumentos na função: o numero da porta e o callback execut c a iniciaçao finalizada
