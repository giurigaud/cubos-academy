console.log(1);
const fs = require("fs"); //importa o modulo file system
console.log(2);
fs.readFile("musica.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
    return console.log(data.toString());
});
console.log(3);
fs.readFile("arquivo.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
    return console.log(data.toString());
});
console.log(4);
fs.readFile("palavra.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
    return console.log(data.toString());
});

//callback chama coisas externas, só roda se tiver ok externo, entao ele é assincrono
//readile é assincrono
console.log(5);

//se quiser ler um arquivo de maneira sinc