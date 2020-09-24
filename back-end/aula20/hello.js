const Koa = require("koa");
const server = new Koa();

server.use(async (ctx) => {
  ctx.body = "Olá, Mundo!";
});

server.listen(8081, () => {
  console.log("Servidor está rodando!");
});
