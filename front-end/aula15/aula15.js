// input.value;
// select.value;
// textarea.value;

{/* 
    HTML
    <label>
    Nome
    <textarea></textarea>
    </label>

    JS
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert(textarea.value)
}) */}


{/* < label >
    Nome
    <input type="number"></input>
</label >
<button>Enviar</button> */}

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert(input.valueAsNumber + 1)
});


checkbox.checked //boolean

// HTML    
//< label >
//     <input type="checkbox>
// Você aceita os termos de uso?
// </label >

//JS

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert(input.checked)
});