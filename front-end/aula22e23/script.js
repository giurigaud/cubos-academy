//Promise


const button = document.querySelector(button)


button.addEventListener('click', () => {
    const promessa = new Promise(resolver => {
        setTimeout(() => {
            resolver()
        }, 1_000);

    });

    promessa.then(() => alert("Oi, tudo bom?"));
});



function dormir(segundos) {
    return new Promise(resolve => setTimeout(() => resolve(), segundos * 1000))
}


