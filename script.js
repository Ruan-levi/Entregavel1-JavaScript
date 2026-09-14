// --- 1. CONTAGEM ---
function executarContagem() {
    const input = document.getElementById('inputContagem').value;
    const res = document.getElementById('resultadoContagem');
    
    let numeros = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 1 == 0) {
            contador++;
        }
    }
    res.innerHTML = `Quantidade de números inteiros: **${contador}**`;
}

// --- 2. FIBONACCI ---
function executarFibonacci() {
    const numero = parseInt(document.getElementById('inputFibonacci').value);
    const res = document.getElementById('resultadoFibonacci');

    if (isNaN(numero) || numero < 1) {
        res.innerHTML = "Informe um número inteiro válido maior que 0.";
        return;
    }

    let resultado = [];
    let a = 0;
    let b = 1;

    if (numero >= 1) resultado.push(a);
    if (numero >= 2) resultado.push(b);

    for (let i = 3; i <= numero; i++) {
        let c = a + b;
        resultado.push(c);
        a = b;
        b = c;
    }

    res.innerHTML = `Sequência: **${resultado.join(', ')}**`;
}

// --- 3. MDC ---
function executarMDC() {
    let numero1 = parseInt(document.getElementById('inputMdc1').value);
    let numero2 = parseInt(document.getElementById('inputMdc2').value);
    const res = document.getElementById('resultadoMDC');

    if (isNaN(numero1) || isNaN(numero2)) {
        res.innerHTML = "Informe dois números válidos.";
        return;
    }

    const n1Orig = numero1;
    const n2Orig = numero2;

    while (numero2 != 0) {
        let resto = numero1 % numero2;
        numero1 = numero2;
        numero2 = resto;
    }

    res.innerHTML = `MDC (\({n1Orig},\){n2Orig}) = **${numero1}**`;
}

// --- 4. NÚMERO PRIMO ---
function ehPrimo(num) {
    let i;
    let j = 0;
    let primo;

    if (num <= 1) {
        return false;
    }
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            j++;
        }
    }
    if (j == 2) {
        primo = true;
    } else {
        primo = false;
    }

    return primo;
}

function executarPrimo() {
    const num = parseInt(document.getElementById('inputPrimo').value);
    const res = document.getElementById('resultadoPrimo');

    if (isNaN(num)) {
        res.innerHTML = "Informe um número válido.";
        return;
    }

    const primo = ehPrimo(num);
    res.innerHTML = primo ? `O número ${num} **é primo**.` : `O número ${num} **não é primo**.`;
}

// --- 5. QUICKSORT ---
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

function executarQuickSort() {
    const input = document.getElementById('inputQuickSort').value;
    const res = document.getElementById('resultadoQuickSort');

    let numeros = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (numeros.length === 0) {
        res.innerHTML = "Insira uma lista de números válida.";
        return;
    }

    const ordenado = quickSort(numeros);
    res.innerHTML = `Array Ordenado: [ **${ordenado.join(', ')}** ]`;
}

// --- 6. SOMATÓRIO ---
function executarSomatorio() {
    const input = document.getElementById('inputSomatorio').value;
    const res = document.getElementById('resultadoSomatorio');

    let conjunto = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (conjunto.length === 0) {
        res.innerHTML = "Insira números válidos.";
        return;
    }

    let soma = 0;
    for (let i = 0; i < conjunto.length; i++) {
        soma += conjunto[i];
    }

    res.innerHTML = `Somatório = **${soma}**`;
}