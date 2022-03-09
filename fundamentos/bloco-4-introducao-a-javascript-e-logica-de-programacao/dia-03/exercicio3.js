let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];


for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    }
}

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i];
    }
}

console.log('A maior palavra é: ' + maiorPalavra)
console.log('A menor palavra é: ' + menorPalavra)







// passar palavra por palavra
// contar o tamanho
// comparar o tamanho
// se for maior, trocar a maiorPalavra








































// // let maiorPalavra = '';
// let menorPalavra = '';
// for (let itens of array) {

//     for (let i = 0; i <= itens.length; i += 1) {
//         if (maiorPalavra.length < itens.length) {
//             maiorPalavra = itens[i];
//         }
//     }
// }
