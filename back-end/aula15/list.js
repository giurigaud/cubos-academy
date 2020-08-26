/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */

const chalk = require('chalk');
const produtos = [
    {
        nome: 'banana',
        preco: 300,
        qtdade: 1
    },
    {
        nome: 'pera',
        preco: 500,
        qtdade: 2
    },
    {
        nome: 'pao',
        preco: 300,
        qtdade: 2
    },
    {
        nome: 'cafe',
        preco: 150,
        qtdade: 3
    }
]
const procurarProduto = (resposta) => {
    let answer = resposta;
    let resultado = '';
    let produto = 0;
    for (let i = 0; i < produtos.length; i++) {
        if (answer === produtos[i].nome) {
            resultado = `Yay! Temos ${chalk.green(answer)}!`;
            produto = i;
            break;
        } else {
            resultado = `Não temos ${chalk.red(answer)}!`;
        }
    }
    console.log(chalk.blue(resultado));
    if (resultado == `Não temos ${chalk.red(answer)}!`) {
        rl.question("Deseja procurar outro produto ou encerrar o atendimento?", (resposta) => {
            if (resposta === "outro produto") {
                rl.question("Qual produto está procurando?", (resposta) => {
                    procurarProduto(resposta);
                })
            } else {
                rl.close();
            }
        })
    }
}



else {
    rl.question(`Quantos de ${resposta} pretende comprar? Temos ${chalk.blue(produtos[produto].qtd)} disponíveis.`, (resposta) => {
        if (resposta > produtos[produto].qtd) {
            rl.question(`Não temos essa quantidade. Temos ${produtos[produto].qtd} apenas. Quer comprar ${produtos[produto].qtd}?`, (resposta) => {
                if (resposta === 'sim') {
                    let precoUnit = produtos[produto].preco / 100;
                    let precoTotal = precoUnit * produtos[produto].qtd;
                    rl.question(`O preço unitário é R$${chalk.green(precoUnit)} e o preco total é R$${chalk.green(precoTotal)}. Deseja pagar agora ou procurar outro produto?`, (resposta) => {
                        if (resposta === 'sim') {
                            console.log("Obrigada pela preferência e volte sempre!")
                            rl.close();
                        } else if (resposta === 'outro produto') {
                            rl.question("Qual produto está procurando?", (resposta) => {
                                procurarProduto(resposta);
                            })
                        } else {
                            console.log('Ok! Obrigada. Atendimento encerrado.')
                            rl.close();
                        }
                    })
                } else {
                    console.log(chalk.bgRed('Ok! Obrigada. Atendimento encerrado.'))
                    rl.close();
                }
            })
        } else {
            let precoUnit = produtos[produto].preco / 100;
            let precoTotal = precoUnit * resposta;
            rl.question(`O preço unitário é R$${precoUnit} e o preco total é R$${precoTotal}. Deseja pagar agora?`, (resposta) => {
                if (resposta === 'sim') {
                    console.log("Obrigada pela preferência e volte sempre!")
                    rl.close();
                } else {
                    console.log('Ok! Obrigada. Atendimento encerrado.')
                    rl.close();
                }
            })
        }
    })
}



// adicionar chalk na reposta depois
rl.question("Qual produto está procurando?", (resposta) => {
    procurarProduto(resposta);
})