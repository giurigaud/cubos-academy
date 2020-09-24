// const array = [1, 2, 3, 4, 5];

// for (let item of array) {
//     console.log(item);
// }
// //qd nao usar
// //qd preciso modificar o array ou qd preciso do indice

// array.forEach((item, i) => {
//     array[i] = item + 1
// });
// array.forEach(funcao);
// console.log(array);

1
2
const array = [1, 2, 3, 4, 5, 14, 2, 21];
const lista = []

for (const elemento of array) {
    if (elemento > 10) {
        lista.push(elemento)
    }
}
console.log(lista);

3
array.forEach((elemento) => {
    console.log(elemento)
});

4.
array.forEach((elemento, i) => {
    console.log(elemento, i);
});

5
const total = []
array.forEach((elemento, i) => {
    total = array[i] * 2
});
console.log(total);
