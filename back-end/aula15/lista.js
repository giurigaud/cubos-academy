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
    let resp = resposta
    let resultado = '';
    let estoque = 0;
    let custo = 0;
    let custoTotal = 0;



    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === resp) {
            resultado = `Yay! Temos seu produto ${chalk.blue(resp)}!!`
            estoque = produtos[i].qtdade;
            custo = produtos[i].preco;
            custoTotal = ((produtos[i].preco * produtos[i].qtdade) / 100)
            break;

        } else {
            resultado = `Não temos o produto ${chalk.red(resp)}!`
        }
    }
    console.log(chalk.red(resultado));
    if (resultado === `Não temos o produto ${chalk.red(resp)}!`) {
        rl.question("Deseja procurar outro produto ou encerrar o atendimento?", (resposta) => {
            if (resposta === "outro produto") {
                rl.question("Qual produto está procurando?", (resposta) => {
                    procurarProduto(resposta);
                })
            } else {
                rl.close()
            }
        })
    } else {
        rl.question("Qual a quantidade deseja comprar?", (resposta => {

            if (resposta <= estoque) {
                console.log(`Ótimo, temos ${estoque} unidades desse item em estoque!`)
                rl.question(`O seu pedido fica no total de ${chalk.green(custoTotal)}. Deseja realizar o pagamento agora?`, (resposta) => {
                    if (resposta === 'sim' || resposta === 'Sim') {
                        console.log("Agradecemos pelo seu pedido! Volte sempre!");
                        rl.close();
                    }
                })
            } else {
                rl.question(`Temos apenas ${estoque} unidades deste item em estoque. Deseja comprar a quantidade disponível?`, (resposta) => {
                    if (resposta === "nao") {
                        console.log("Obrigada pelo contato!");
                        rl.close();
                    } else {
                        console.log(`Excelente! O seu pedido fica no total de ${chalk.green(custoTotal)}.`)
                        rl.question(`Deseja realizar o pagamento agora?`, (resposta) => {
                            if (resposta === 'sim' || resposta === 'Sim') {
                                console.log("Agradecemos pelo seu pedido! Volte sempre!");
                                rl.close();
                            } else {
                                rl.close()
                            }
                        })

                    }
                })
            }
        }))
    }

}

rl.question("Qual o produto está procurando?", (resposta) => {
    procurarProduto(resposta);
})

