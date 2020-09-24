const fs = require("fs");

const arquivo = fs.readFileSync("cartas.txt");

//quebrou a msg
let quebraMsg = arquivo.toString().split('\n');
let guardar = [];



for (let i = 0; i < quebraMsg.length; i++) {
    if (quebraMsg[i] === '---') {
        guardar.push("[INÍCIO DA MENSAGEM!]")
        guardar.push(`Remetente: ${quebraMsg[i - 3]}`)
        guardar.push(`Destinatário: ${quebraMsg[i - 2]}`)
        guardar.push(`Mensagem: ${quebraMsg[i - 1]}`)
        guardar.push("[FIM DA MENSAGEM!]")

        // console.log("[INÍCIO DA MENSAGEM!]")
        // console.log(`Remetente: ${quebraMsg[i - 3]}`)
        // console.log(`Destinatário: ${quebraMsg[i - 2]}`)
        // console.log(`Mensagem: ${quebraMsg[i - 1]}`)
        // console.log("[FIM DA MENSAGEM!]")




    }
}
console.log(guardar)

const arquivo1 = fs.readFileSync("enderecos.txt");
let address = arquivo1.toString().split('\n');


let guardar1 = []

for (let i = 0; i < address.length; i++) {
    if (address[i] === '---') {
        guardar1.push(`Destinatário: ${address[i - 2]}`)
        guardar1.push(`Endereço: ${address[i - 1]}`)
    }
}
console.log(guardar1)

for (let i = 0; i < guardar.length; i++) {

    for (let j = 0; j < guardar1.length; i++) {
        if (guardar[i] === guardar[j]) {



        }
    }

}