const finalizado = () => {
    console.log("Finalizado!");
}

const contagemRegressiva = (valorInicial, aoFinalizar) => {
    for (let i = valorInicial; i >= 0; i--) {
        console.log(i)
    }
    aoFinalizar();
}

//------------- responsabilidade compartilhada de programador
contagemRegressiva(10, () => {
    console.log("Contagem regressiva!")
});
//finalizado é a callback
//codigo sincrono - executa na ordem esperada