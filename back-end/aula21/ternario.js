// // const caraOuCoroa = () => {
// //     const valor = Math.floor(Math.random() * 100);
//     console.log(valor);
// // 
//     if (valor < 0 || valor > 100) {
//         return 'erro';
//     }

//     if (valor <= 50) {
//         return 'cara';
//     } else {
//         return 'coroa'
//     }
// };

const caraOuCoroa = () => {
    return Math.floor(Math.random() * 100) <= 50 ? "cara" : "coroa";
};

console.log(caraOuCoroa(25));
console.log(caraOuCoroa(75));
console.log(caraOuCoroa(2000));