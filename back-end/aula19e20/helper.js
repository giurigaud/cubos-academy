/**
 *  Grupo 1. Questão 1
    Crie uma função que receba um código de três digitos e retorne o nome do banco,
    o nome retornado não deve conter as palavras S.A., (antigo), (Brasil), Holding. 
    Leia as instruções para entender como os códigos de bancos são representados.

    // função (codigo) -> string
    // remover S.A., (antigo), (Brasil), Holding
 */

const obterNomeDoBanco = (codigo) => {
  const bancos = {
    "001": "Banco do Brasil S.A.",
    "033": "Banco Santander (Brasil) S.A.",
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
    .replace("S.A.", "")
    .replace("(antigo)", "")
    .replace("Holding", "")
    .trim();

  return nomeDoBanco;
};

/**
 * 2. Crie uma função que remova quaisquer caracteres
 * que não seja número dentro de uma string.
 * O retorno deve ser uma string.
 */

const limpaTexto = (texto) => {
  let textoTransformado = texto;

  while (textoTransformado.indexOf(".") !== -1) {
    textoTransformado = textoTransformado.replace(".", "");
  }

  while (textoTransformado.indexOf("-") !== -1) {
    textoTransformado = textoTransformado.replace("-", "");
  }

  return textoTransformado;
};

// 3. Cria uma função que receba uma string de 11 digitos que represente um
// CPF apenas em números e formate para o formato a seguir: 190.012.840-35

const formatarCPF = (numero) => {
  const cpf = `${numero.substr(0, 3)}.${numero.substr(3, 3)}.${numero.substr(
    6,
    3
  )}-${numero.substr(9, 2)}`;
  return cpf;
};

// 4. Crie uma função que receba uma string de 5 digitos que represente o
//número da agência em string e formate para o formato a seguir: 1234-5

const formatarAgencia = (numero) => {
  const agencia = `${numero.substr(0, 4)}-${numero.substr(4, 1)}`;
  return agencia;
};

// 5. Crie uma função que receba uma string de 7 digitos que represente o
// número da conta corrente em string e formate para o formato a seguir: 123456-3

const formatarContaCorrente = (numero) => {
  const contaCorrente = `${numero.substr(0, 6)}-${numero.substr(6, 1)}`;
  return contaCorrente;
};

const formatador = (numero) => {
  if (numero.length === 11) {
    return formatarCPF(numero);
  } else if (numero.length === 5) {
    return formatarAgencia(numero);
  } else if (numero.length === 7) {
    return formatarContaCorrente(numero);
  }
};

// 6. Adicione todas as funções criadas neste grupo em um módulo, helpers.js.
// Exporte todas as funções desse módulo.

module.exports = {
  obterNomeDoBanco: obterNomeDoBanco,
  limpaTexto: limpaTexto,
  formatarCPF: formatarCPF,
  formatarAgencia: formatarAgencia,
  formatarContaCorrente: formatarContaCorrente,
  formatador: formatador,
};
