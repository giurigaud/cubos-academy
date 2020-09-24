//pegar o input
//salvar no localStorage
//mudar de html

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const texto = document.querySelector('input').value;
    localStorage.setItem('chave', texto)

    location.href = 'pessoa.html';
    //como mudar de pagina, ir pra outro html
    alert('Texto salvo')
});

