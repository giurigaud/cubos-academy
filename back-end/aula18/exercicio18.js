const fs = require("fs");
const enderecosArquivo = fs.readFileSync("enderecos.txt");
const cartasArquivo = fs.readFileSync("cartas.txt");
const inicioCarta = "[INICIO DA MENSAGEM]";
const finalCarta = "[FIM DA MENSAGEM]";

/** Transformação em string dos arquivos e quebra deles em um array */
let enderecos = enderecosArquivo.toString().split("---");
let cartas = cartasArquivo.toString().split("---");

let enderecosObjeto = {};
/**
 * O tratamento de endereços pode ser feito primeiro e pode ajudar a gente.
 * Uma estratégia é ao invés de continuar armazenando o endereço em texto
 * é armazená-lo em forma de objeto.
 *
 * chave -> valor
 * Nome -> Endereço
 */
for (let i = 0; i < enderecos.length; i++) {
  const enderecosQuebrados = enderecos[i].trim().split("\n");
  enderecosObjeto[enderecosQuebrados[0]] = enderecosQuebrados[1];
}

/**
 * Apesar da quebra, cada registro ainda possui a notação `\n` associada a cada mensagem.
 * Então, passamos por cada elemento e quebramos eles por `\n`.
 *
 * Utilizamos .trim() para remover os espaços em branco.
 *
 * Depois disso, montamos já todo o formato da mensagem.
 * Adicionamos a quebra de linha na string.
 */
for (let i = 0; i < cartas.length; i++) {
  const cartaQuebrada = cartas[i].trim().split("\n");
  const Remetente = `Remetente: ${cartaQuebrada[0]}`;
  const Destinatario = `Destinatário: ${cartaQuebrada[1]}`;
  const Mensagem = `Mensagem: ${cartaQuebrada[2]}`;
  /**
   * 
   * cartaQuebrada[1] refere-se ao nome do destinatário
   *
   * Verificamos se existe endereço associado ao nome do destinatário na lista de endereços.
   * Se estiver montamos a carta inteira.
   * Do contrário, não adicionamos o endereço na carta.
   */
  let carta;
  if (enderecosObjeto[cartaQuebrada[1]]) {
    Endereco = `Endereço: ${enderecosObjeto[cartaQuebrada[1]]}`;
    carta = `${inicioCarta}\n${Remetente}\n${Destinatario}\n${Endereco}\n${Mensagem}\n${finalCarta}`;
  } else {
    carta = `${inicioCarta}\n${Remetente}\n${Destinatario}\n${Mensagem}\n${finalCarta}`;
  }
  cartas[i] = carta;
}

/**
 * Por fim, escrevemos em arquivo o resultado final.
 */
fs.writeFile('resultado.txt', cartas, () => {
    console.log('Cartas escritas');
});