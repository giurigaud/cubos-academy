//leitura arquivo de maneira sincrona
const fs = require("fs");

const arquivo = fs.readFileSync("musica.txt");

console.log(arquivo);
//n precisa de uma função pra tratar os erros