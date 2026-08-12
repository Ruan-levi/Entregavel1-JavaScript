function quickSort(vetor) {

    if (vetor.length <= 1) {
        return vetor;
    }

    let pivo = vetor[0];
    let menores = [];
    let maiores = [];

    for (let i = 1; i < vetor.length; i++) {

        if (vetor[i] < pivo) {
            menores.push(vetor[i]);
        } else {
            maiores.push(vetor[i]);
        }
    }
    return [...quickSort(menores), pivo, ...quickSort(maiores)];
}
let numeros = [8, 3, 6, 1, 10, 2, 5];
console.log(quickSort(numeros));