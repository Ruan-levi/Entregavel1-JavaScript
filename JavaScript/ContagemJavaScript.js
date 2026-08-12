let numeros = [3, 5, 1, 8, 4, 6, 3.3, 2, 7.5];
let contador = 0;
let i;

for (let i = 0; i < numeros.length; i++) {
   
    if (numeros[i] % 1 == 0) {
        contador++;
    } else {
        console.log("O número " + numeros[i] + " não é inteiro.");
    }
}
console.log("Quantidade de números inteiros:", contador);