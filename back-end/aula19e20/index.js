const helper = require("./helper");
const fs = require("fs");

const correntistas = [];
const movimentacoes = [];

/**
 * Insere uma movimentação na lista de movimentações
 */
const inserirMovimentacao = (cpf, tipo, valor, data) => {
  movimentacoes.unshift({ cpf: cpf, tipo: tipo, valor: valor, data: data });
};

const obterCorrentistas = () => {
  return correntistas;
};

/**
 * Obtém um correntista da lista de correntistas
 */
const obterCorrentista = (cpf) => {
  let encontrado = false;
  for (let i = 0; i < correntistas.length; i++) {
    if (correntistas[i].cpf === helper.limpaTexto(cpf)) {
      encontrado = true;
      console.log("Correntista encontrado! Retornando...");
      return { index: i, informacoes: correntistas[i] };
    }
  }

  if (encontrado === false) {
    console.log("Não existe CPF cadastrado.");
    return false;
  }
};

/**
 * Cria um novo correntista
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
    helper.limpaTexto(correntista.cpf)
  );

  if (correntistaCriado) {
    console.log("Erro: cpf já cadastrado!");
    return false;
  }

  const novoCorrentista = {
    cpf: helper.limpaTexto(correntista.cpf),
    nome: correntista.nome,
    codigoDoBanco: correntista.codigoDoBanco,
    conta: helper.limpaTexto(correntista.conta),
    agencia: helper.limpaTexto(correntista.agencia),
    saldo: 0,
  };
  console.log("Successo!");
  correntistas.push(novoCorrentista);
  return novoCorrentista;
};

/**
 * Obtem extrato de um correntista
 */
const obterExtrato = (cpf) => {
  const correntista = obterCorrentista(helper.limpaTexto(cpf));

  correntistaMovimentacoes = [];
  if (correntista) {
    for (let i = 0; i < movimentacoes.length; i++) {
      if (movimentacoes[i].cpf === correntista.informacoes.cpf) {
        correntistaMovimentacoes.push(movimentacoes[i]);
      }
    }

    return correntistaMovimentacoes;
  }

  return false;
};

/**
 * Remove um correntista da lista de correntistas
 */
const removerCorrentista = (cpf) => {
  const correntista = obterCorrentista(helper.limpaTexto(cpf));

  if (correntista) {
    correntistas.splice(correntista.informacoes.index, 1);
    console.log("Sucesso!");
    return true;
  } else {
    return false;
  }
};

/**
 * Atualize um correntista
 */
const atualizarCorrentista = (cpf, propriedade, valor) => {
  const correntista = obterCorrentista(helper.limpaTexto(cpf));
  const novoValor = helper.limpaTexto(valor);
  if (correntista) {
    if (
      propriedade === "saldo" ||
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
        cpf: correntista.informacoes.cpf,
        codigoDoBanco: correntista.informacoes.codigoDoBanco,
        agencia: correntista.informacoes.agencia,
        conta: correntista.informacoes.conta,
        saldo: correntista.informacoes.saldo,
      };
    } else if (propriedade === "cpf") {
      correntistaAtualizado = {
        nome: correntista.informacoes.nome,
        cpf: novoValor,
        codigoDoBanco: correntista.informacoes.codigoDoBanco,
        agencia: correntista.informacoes.agencia,
        conta: correntista.informacoes.conta,
        saldo: correntista.informacoes.saldo,
      };
    }
    console.log("Atualizado!");
    correntistas.splice(
      correntista.informacoes.index,
      1,
      correntistaAtualizado
    );
    return true;
  } else {
    return false;
  }
};

/**
 * Realiza um novo depósito.
 */
const depositar = (cpf, valor) => {
  const correntista = obterCorrentista(helper.limpaTexto(cpf));

  if (valor < 0) {
    inserirMovimentacao(
      correntista.cpf,
      "erro - entrada - valor negativo",
      valor,
      "26/08/2020"
    );
    console.log("Erro: valor a ser depositado não pode ser negativo!");
    return false;
  }

  if (correntista) {
    const correntistaAtualizado = {
      nome: correntista.informacoes.nome,
      cpf: correntista.informacoes.cpf,
      codigoDoBanco: correntista.informacoes.codigoDoBanco,
      agencia: correntista.informacoes.agencia,
      conta: correntista.informacoes.conta,
      saldo: correntista.informacoes.saldo + valor,
    };

    correntistas.splice(correntista.index, 1, correntistaAtualizado);
    console.log("Depositado!");
    inserirMovimentacao(
      correntista.informacoes.cpf,
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
 * Saca um valor de um correntista
 */
const sacar = (cpf, valor) => {
  const correntista = obterCorrentista(helper.limpaTexto(cpf));

  if (valor < 0) {
    console.log("Erro: não é possível sacar um valor negativo");
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

  if (correntista) {
    const correntistaAtualizado = {
      nome: correntista.informacoes.nome,
      cpf: correntista.informacoes.cpf,
      codigoDoBanco: correntista.informacoes.codigoDoBanco,
      agencia: correntista.informacoes.agencia,
      conta: correntista.informacoes.conta,
      saldo: correntista.informacoes.saldo - valor,
    };

    correntistas.splice(correntista.index, 1, correntistaAtualizado);
    console.log("Sacado!");
    inserirMovimentacao(
      correntista.informacoes.cpf,
      "saida",
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
  const origem = obterCorrentista(helper.limpaTexto(cpfOrigem)).informacoes;
  const destino = obterCorrentista(helper.limpaTexto(cpfDestino)).informacoes;

  if (bancosDiferentes === false) {
    if (origem.codigoDoBanco !== destino.codigoDoBanco) {
      console.log("Não é possível fazer transferência para bancos diferentes");
      return false;
    }
  }

  const sacado = sacar(cpfOrigem, valor);
  if (sacado) {
    depositar(cpfDestino, valor);
  }
};

/**
 * Imprime um extrato de um correntista
 */
const imprimirExtrato = (cpf) => {
  const correntista = obterCorrentista(cpf);
  const extrato = obterExtrato(cpf);

  if (correntista && extrato) {
    const nomeDoBanco = helper.obterNomeDoBanco(
      correntista.informacoes.codigoDoBanco
    );

    const primeiraLinha = `|| ${nomeDoBanco} ||\n`;
    const segundaLinha = `Extrato bancário de ${
      correntista.informacoes.nome
      }, CPF: ${helper.formatarCPF(correntista.informacoes.cpf)}\n`;
    const terceiraLinha = `Agência ${helper.formatarAgencia(
      correntista.informacoes.agencia
    )} - Conta Corrente ${helper.formatarContaCorrente(
      correntista.informacoes.conta
    )}\n`;
    const quartaLinha = "---------------------------------------------\n";
    const quintaLinha = "|| Movimentações ||\n";
    const sextaLinha = "Tipo | Data da Ocorrência | Valor movimentado\n";
    const setimaLinha = "---------------------------------------------\n";

    let impressao =
      primeiraLinha +
      segundaLinha +
      terceiraLinha +
      quartaLinha +
      quintaLinha +
      sextaLinha +
      setimaLinha;

    for (let i = 0; i < extrato.length; i++) {
      impressao += `${extrato[i].tipo} | ${extrato[i].data} | R$ ${extrato[i].valor},00\n`;
    }

    console.log(impressao);
    return impressao;
  }
};

/**
 * Salva um extrato em forma de arquivo
 * A pasta extrato precisa existir.
 */
const salvarExtrato = (cpf) => {
  const extratoImpresso = imprimirExtrato(cpf);

  if (extratoImpresso) {
    const caminho = `./extratos/${cpf}_${Math.random()}.txt`;
    fs.writeFile(caminho, extratoImpresso, (err) => {
      "Extrato salvo!";
    });
  }
};

module.exports = {
  obterCorrentistas: obterCorrentistas,
  obterCorrentista: obterCorrentista,
  removerCorrentista: removerCorrentista,
  criarCorrentista: criarCorrentista,
  atualizarCorrentista: atualizarCorrentista,
};
