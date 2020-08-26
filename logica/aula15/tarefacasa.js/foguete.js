const botao = document.querySelector("button");
const p = document.querySelector("p");

botao.addEventListener("click", () => {
    for (let i = 10; i < 10; i--) {
        p.innerText = i;
        input.setAttribute("type", "text")
    }
})