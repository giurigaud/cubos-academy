// 1. Crie uma função que receba um código de três digitos e retorne o nome do banco,
// o nome retornado não deve conter as palavras S.A., (antigo), (Brasil), Holding.
// Leia as instruções para entender como os códigos de bancos são representados.

// funcao(codigo) -> string
// remover S.A., (antigo), (Brasil), Holding


const obterNomeDoBanco = (codigo) => {
    const bancos = {
        001: "Banco do Brasil S.A.",
        033: "Banco Santander (Brasil) S.A.",
        104: "Caixa Econômica Federal",
        237: "Banco Bradesco S.A.",
        341: "Banco Itaú S.A.",
        356: "Banco Real S.A. (antigo)",
        389: "Banco Mercantil do Brasil S.A.",
        399: "HSBC Bank Brasil S.A.",
        422: "Banco Safra S.A.",
        453: "Banco Rural S.A.",
        633: "Banco Rendimento S.A.",
        652: "Itaú Unibanco Holding S.A.",
        745: "Banco Citibank S.A.",
    };

    const nomeDoBanco = bancos[codigo]
        .replace("S.A.", "").replace("(antigo)", "").replace("Holding", "").trim();

    return nomeDoBanco;

};

console.log(obterNomeDoBanco(652))

/* 2. 
Crie uma função que remova quaisquer caracteres que não seja número dentro de uma string. 
O retorno deve ser uma string. */

const limpaTexto = (texto) => {
    const textTransformado = texto.replace(/\-/g, "").replace(/\./g, "")
    return textTransformado;
}


console.log(limpaTexto("190.012.840-35"));
console.log(limpaTexto("1234-5"));
console.log(limpaTexto("123456-3"));

/**
3.
 Cria uma função que receba uma string de 11 digitos que represente um CPF apenas em números e formate para o formato a seguir: 190.012.840-35
19001284035	190.012.840-35
4.
Crie uma função que receba uma string de 5 digitos que represente o número da agência em string e formate para o formato a seguir: 1234-5

5.
Crie uma função que receba uma string de 7 digitos que represente o número da conta corrente em string e formate para o formato a seguir: 123456-3
 */

const formatarCPF = (numero) => {
    const cpfFormat = `${numero.substr(0, 3)}.${numero.substr(3, 3)}.${numero.substr(6, 3)}-${numero.substr(9, 2)}`;

    return cpfFormat;
}

console.log(formatarCPF("19001284035"))

const formatarAg = (numero) => {
    const agFormat = `${numero.substr(0, 4)}-${numero.substr(4, 1)}`;
    return agFormat;
};

console.log(formatarAg("12345"));

const formatarConta = (numero) => {
    const contaFormat = `${numero.substr(0, 6)}-${numero.substr(6, 1)}`;
    return contaFormat;
};

console.log(formatarConta("1234567"));

const formatador = (numero) => {
    if (numero.length === 11) {
        return formatarCPF(numero);
    } else if (numero.length === 7) {
        return formatarConta(numero);
    } else if (numero.length === 5) {
        return formatarAg(numero);
    }
}

console.log(formatador("19045"))

module.exports = {
    obterNomeDoBanco: obterNomeDoBanco,
    limpaTexto: limpaTexto,
    formatarCPF: formatarCPF,
    formatarAg: formatarAg,
    formatarConta: formatarConta,
    formatador: formatador

}