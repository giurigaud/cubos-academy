const finalizado = () => {
    console.log("Finalizado!");
}

const contagemRegressiva = (valorInicial, aoFinalizar) => {
    for (let i = valorInicial; i >= 0; i--) {
        console.log(i)
    }
    finalizado();
}
//------------ responsabilidade do primeiro programador
contagemRegressiva(10);