//DOM - DOCUMENT, OBJECT, MANIPULATION

/*Interações basicas c o usuario
alert: mostra uma msg
confirm: pede confirmação (sim/nao)
prompt: pede informações (campo de texto)
*/
//Primeira questão
alert("Olá, mundo!");

//2 questao
const nome = prompt("Qual é o seu nome?")

alert("Olá, " + nome)

//3 questao
const nome = prompt("Qual é o seu nome?")

alert("Olá, " + nome)


const jaVisitou = confirm("Você já visitou esse site antes?");

if (!jaVisitou) {
    const nome = prompt("Qual é o seu nome?")

    alert("Olá, " + nome)
}

/* acessando elementos da pagina
-querySelector: encontra UM elemento na pag q atenda um seletor
-querySelectorAll: encontra TODOS os elemntos na pagina q correspondem a um seletor */

//2.a
querySelector
document.querySelector("h1")
//2.b
document.querySelectorAll(".secao")
//2.c
document.querySelector("li")
//2.d
document.querySelectorAll("ul > li")


//3.
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Olá, mundo!")
});

//Manipulando atributos

// elemento.getAttribute - pegue o valor
// elemento.setAttribute - substitui o vlaor
// elemento.hasAttribute - esse elemento tem esse atributo ? V ou F
// elemento.removeAttribute - remove
// elemento.toggleAttribute - se existir ele tira, senao existir ele coloca

//4.

const button = document.querySelector("button");
const spoiler = document.querySelector(".spoiler");

button.addEventListener("click", () => {
    const estaOculto = spoiler.hasAttribute("hidden");

    if (estaOculto) {
        spoiler.removeAttribute("hidden");
    } else {
        spoiler.setAttribute("hidden", "");
    }
});

const button = document.querySelector("button");
const spoiler = document.querySelector(".spoiler");
const input = document.querySelector("input");

button.addEventListener("click", () => {
    spoiler.toggleAttribute("hidden")
    alert(input.getAttribute("type"))
});

//manipulando a classe de um objeto
// elemento.classList.add
// elemento.classList.remove
// elemento.classList.contains - contem a classe ou nao
// elemento.classList.toggle

//5.

const button = document.querySelector("button");
const compras = document.querySelector(".compras");

button.addEventListener("click", () => {
    if (compras.classList.contains("riscado")) {
        compras.classList.remove("riscado")
    } else {
        compras.classList.add("riscado");
    }
})


const button = document.querySelector("button");
const compras = document.querySelector(".compras");

button.addEventListener("click", () => {
    compras.classList.toggle("riscado");
})

//mudando os estilos de um elemento
//elemento.style

//Leitura 
//elemento.style.padding // 2px
//Escrita
//elemento.style.padding = 2px  

//6.
const button = document.querySelector("button");
const compras = document.querySelector(".compras");

button.addEventListener("click", () => {
    if (compras.style["text-decoration"] = "line-through") {
        compras.style["text-decoration"] = "";
    } else {
        compras.style["text-decoration"] = "line-through";
    }
})

//mudar o conteudo de um elemento



//7.
let contagem = 0

const button = document.querySelector("button");
const compras = document.querySelector(".contador");

button.addEventListener()("click", () => {
    contagem += 1;
    if (contagem % 2 === 0) {
        contador.innerHTML = "<b>" + contagem + "<b>"
    } else {
        contador.innerText = contagem;
    }




    contador.innerText = contagem;
})