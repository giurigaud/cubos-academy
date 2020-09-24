const select = document.querySelector("select");
const labelTel = document.getElementById("tel");
const labelEmail = document.getElementById("email");

select.addEventListener("input", () => {

    if (select.value === "telefone") {
        labelTel.hidden = false;
        labelEmail.hidden = true;
    } else {
        labelTel.hidden = true;
        labelEmail.hidden = false;
    }

})

