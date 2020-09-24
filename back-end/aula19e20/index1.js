const helper1 = require("./helper1");

console.log(helper1.formatador("19045"))

let correntista = [];
const movimentacoes = [];

/**
 * Inserir movimentação na lista de movimentação
 */

const inserirMovimentacao = (cpf, tipo, valor, data) => {
    movimentacoes.unshift({
        cpf: cpf,
        tipo: tipo,
        valor: valor,
        data: data,
    })
}

//obter correntista da lista 
/**Crie uma função que percorra uma lista de correntistas
 * a partir de um CPF e retorne o objeto deste correntista
 *  caso exista, do contrário,
 * imprima uma mensagem ao usuário dizendo
 * Não existe CPF cadastrado. */

const obterCorrentista = (cpf) => {
    let encontrado = false

    for (let i = 0; i < correntista.length; i++) {
        if (correntista[i].cpf === helper1.limpaTexto(cpf)) {
            encontrado = true;
            console.log("Correntista encontrado!");
            return { index: i, informações: correntista[i] }
        }
    }
    if (encontrado === false) {
        console.log("Não existe CPF cadastrado");
        return false;
    }
};


/**
 * Criar um novo correntista
 */

const criarCorrentista = (correntista) => {
    console.log(correntista);
    if (
        !correntista.nome ||
        !correntista.cpf ||
        !correntista.codigoDoBanco ||
        !correntista.agencia ||
        !correntista.conta
    ) {
        console.log("Erro: informações incompletas");
        return false;
    }

    const correntistaCriado = obterCorrentista(
        helper1.limpaTexto(correntista.cpf)
    );

    if (correntistasCriado) {
        console.log("Erro: CPF já cadastrado!");
        return false;
    }

    const novoCorrentista = {
        cpf: helper1.limpaTexto(correntista.cpf),
        nome: correntista.nome,
        codigoDoBanco: correntista.codigoDoBanco,
        conta: helper1.limpaTexto(correntista.conta),
        agencia: helper1.limpaTexto(correntista.agencia),
        saldo: 0,
    };
    console.log("Sucesso!");
    correntista.push(novoCorrentista);
    return novoCorrentista;
};

/**
 * Atualizar um correntista!!!
 */

const atualizarCorrentista = (cpf, propriedade, valor) => {
    const correntistas = obterCorrentista(helper1.limpaTexto(cpf));
    const novoValor = helper1.limpaTexto(valor);
    if (correntistas) {
        if (propriedade === "saldo" ||
            propriedade === "codigoDoBanco" ||
            propriedade === "agencia" ||
            propriedade === "conta"
        ) {
            return false;
        }

        let correntistaAtualizado;
        if (propriedade === "nome") {
            correntistaAtualizado = {
                nome: valor,
                cpf: correntistas.informações.cpf,
                codigoDoBanco: correntistas.informações.codigoDoBanco,
                agencia: correntistas.informações.agencia,
                conta: correntistas.informações.conta,
                saldo: correntistas.informações.saldo - valor,
            };
        } else if (propriedade === "cpf") {
            correntistaAtualizado = {
                nome: correntistas.informações.nome,
                cpf: novoValor,
                codigoDoBanco: correntistas.informações.codigoDoBanco,
                agencia: correntistas.informações.agencia,
                conta: correntistas.informações.conta,
                saldo: correntistas.informações.saldo,
            };
        }
        console.log("Atualizado!");
        correntistas.splice(
            correntistas.informações.index,
            1,
            correntistaAtualizado
        );
        return true;
    } else {
        return false;
    }

};

/**
 * Remoção correntista!!
 */

const removerCorrentista = () => {
    const correntista = obterCorrentista(helper1.limpaTexto(cpf));

    if (correntista) {
        correntista.splice(correntista.informações.index, 1);
        console.log("Sucesso!");
        return true;
    } else {
        return false;
    }
};


/**
 * Realiza um novo depósito.
 */

const depositar = (cpf, valor) => {
    const correntista = obterCorrentista(helper1.limpaTexto(cpf));

    if (valor < 0) {
        inserirMovimentacao(
            correntista.cpf,
            "erro - entrada - valor negativo",
            valor,
            "26/08/2020"
        );
        console.log("Erro: valor depositado não pode ser negativo");
        return false;
    }


    if (correntista) {
        const correntistaAtualizado = {
            nome: correntista.informações.nome,
            cpf: correntista.informações.cpf,
            codigoDoBanco: correntista.informações.codigoDoBanco,
            agencia: correntista.informações.agencia,
            conta: correntista.informações.conta,
            saldo: correntista.informações.saldo + valor,
        };

        correntista.splice(correntista.index, 1, correntistaAtualizado);
        console.log("Depositado!");
        inserirMovimentacao(
            correntista.informações.cpf,
            "entrada",
            valor,
            "26/08/2020"
        );

        return true;
    } else {
        return false;
    }
};

/**
 * Transfere um valor entre dois correntistas
 */

const transferir = (cpfOrigem, cpfDestino, valor, bancosDiferentes) => {
    const origem = obterCorrentista(helper1.limpaTexto(cpfOrigem));
    const destino = obterCorrentista(helper1.limpaTexto(cpfDestino));

    if (bancosDiferentes === false) {
        if (origem.codigoDoBanco !== destino.codigoDoBanco) {
            console.log("Não é possível fazer transferência para banco diferentes");
            return false;
        }
    }

    const sacado = sacar(cpfOrigem, valor);
    if (sacado) {
        depositar(cpfDestino, valor);
    }
};

/**
 * Sacar um valor de um correntista
 */

const sacar = (cpf, valor) => {
    const correntista = obterCorrentista(helper1.limpaTexto(cpf));

    if (valor < 0) {
        console.log("Erro: Valor negativo");
        inserirMovimentacao(
            correntista.cpf,
            "erro - saida - valor negativo",

            valor,
            "26/08/2020"
        );
        return false;
    }

    if (correntista.saldo < valor) {
        console.log("Erro: não é possível sacar sem saldo disponível");
        inserirMovimentacao(
            correntista.cpf,
            "erro - saida - falta de saldo",
            valor,
            "26/08/2020"
        );
        return false;
    }
    if (correntistas) {

    }
}












module.exports = {
    obterCorrentista: obterCorrentista,
    removerCorrentista: removerCorrentista,
    criarCorrentista: criarCorrentista,
    atualizarCorrentista: atualizarCorrentista,
};

