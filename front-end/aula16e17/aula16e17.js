//eventos

const botao = document.querySelector("button");
//existem diferentes tipos de eventos
botao.addEventListener("click", () => {
    //funçao q ocorre qd botao é clicado
})



//propagação de eventos

/**
 * exemplo:
 * html 
 * <div>
 *  <button>
 * Botão
 *  </button>
 * </div>
 */

const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener("click", () => {
    alert("div clicada")
})

button.addEventListener("click", () => {
    alert("button clicado");
})

/**
 * Stop propagation
 */

event.stopPropagation()

document.createElement
elemento.append
elemento.remove