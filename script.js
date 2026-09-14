// ==========================================
// ALGORITMOS
// ==========================================

// 1. NÚMERO PRIMO
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


// 2. SOMATÓRIO
function somatorio(conjunto) {
    let soma = 0;

    for (let i = 0; i < conjunto.length; i++) {
        soma += conjunto[i];
    }

    return soma;
}


// 3. FIBONACCI
function fibonacci(numero) {
    let a = 0;
    let b = 1;
    let resultado = [a, b];

    if (numero <= 1) {
        return [0];
    }

    if (numero == 2) {
        return resultado;
    }

    for (let i = 3; i <= numero; i++) {
        let c = a + b;
        resultado.push(c);
        a = b;
        b = c;
    }

    return resultado;
}


// 4. MDC
function mdc(numero1, numero2) {
    while (numero2 != 0) {
        let resto = numero1 % numero2;
        numero1 = numero2;
        numero2 = resto;
    }

    return Math.abs(numero1);
}


// 5. QUICKSORT
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


// 6. CONTAGEM
function contarInteiros(numeros) {
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 1 == 0) {
            contador++;
        }
    }

    return contador;
}


// ==========================================
// INTERFACE
// ==========================================

const dadosAlgoritmos = {
    primo: {
        titulo: "Número Primo",
        numero: "01"
    },
    somatorio: {
        titulo: "Somatório",
        numero: "02"
    },
    fibonacci: {
        titulo: "Fibonacci",
        numero: "03"
    },
    mdc: {
        titulo: "Máximo Divisor Comum",
        numero: "04"
    },
    quicksort: {
        titulo: "Quicksort",
        numero: "05"
    },
    contagem: {
        titulo: "Contagem",
        numero: "06"
    }
};


function selecionarAlgoritmo(tipo, botao) {

    document.querySelectorAll(".algoritmo").forEach(item => {
        item.classList.remove("ativo");
    });

    botao.classList.add("ativo");

    document.getElementById("tituloAlgoritmo").textContent =
        dadosAlgoritmos[tipo].titulo;

    document.getElementById("numeroAlgoritmo").textContent =
        dadosAlgoritmos[tipo].numero;

    criarFormulario(tipo);

    limparResultado();
}


function limparResultado() {
    document.getElementById("resultado").innerHTML = `
        <span class="resultado-label">RESULTADO</span>
        <p>Preencha os dados e execute o algoritmo.</p>
    `;
}


function mostrarResultado(texto, erro = false) {
    document.getElementById("resultado").innerHTML = `
        <span class="resultado-label">RESULTADO</span>
        <p class="${erro ? "erro" : "destaque"}">${texto}</p>
    `;
}


function criarFormulario(tipo) {

    const formulario = document.getElementById("formulario");

    if (tipo === "primo") {

        formulario.innerHTML = `
            <div class="formulario">
                <label for="numeroPrimo">Digite um número inteiro</label>
                <input type="number" id="numeroPrimo" placeholder="Ex: 11">
                <button onclick="executarPrimo()">Verificar número</button>
            </div>
        `;

    } else if (tipo === "somatorio") {

        formulario.innerHTML = `
            <div class="formulario">
                <label for="numerosSomatorio">
                    Digite os números separados por vírgula
                </label>
                <input
                    type="text"
                    id="numerosSomatorio"
                    placeholder="Ex: 2, 5, 8, 10, 15"
                >
                <button onclick="executarSomatorio()">Calcular somatório</button>
            </div>
        `;

    } else if (tipo === "fibonacci") {

        formulario.innerHTML = `
            <div class="formulario">
                <label for="numeroFibonacci">
                    Quantidade de termos
                </label>
                <input
                    type="number"
                    id="numeroFibonacci"
                    min="1"
                    placeholder="Ex: 10"
                >
                <button onclick="executarFibonacci()">Gerar sequência</button>
            </div>
        `;

    } else if (tipo === "mdc") {

        formulario.innerHTML = `
            <div class="formulario">
                <label for="numero1">Primeiro número</label>
                <input type="number" id="numero1" placeholder="Ex: 87">

                <label for="numero2">Segundo número</label>
                <input type="number" id="numero2" placeholder="Ex: 36">

                <button onclick="executarMdc()">Calcular MDC</button>
            </div>
        `;

    } else if (tipo === "quicksort") {

        formulario.innerHTML = `
            <div class="formulario">
                <label for="numerosQuicksort">
                    Digite os números separados por vírgula
                </label>
                <input
                    type="text"
                    id="numerosQuicksort"
                    placeholder="Ex: 8, 3, 6, 1, 10, 2, 5"
                >
                <button onclick="executarQuicksort()">Ordenar números</button>
            </div>
        `;

    } else if (tipo === "contagem") {

        formulario.innerHTML = `
            <div class="formulario">
                <label for="numerosContagem">
                    Digite os números separados por vírgula
                </label>
                <input
                    type="text"
                    id="numerosContagem"
                    placeholder="Ex: 3, 5, 1, 8, 4, 6, 3.3, 2, 7.5"
                >
                <button onclick="executarContagem()">Contar inteiros</button>
            </div>
        `;
    }
}


// ==========================================
// EXECUÇÃO DOS ALGORITMOS
// ==========================================

function executarPrimo() {

    const valor = document.getElementById("numeroPrimo").value;

    if (valor === "") {
        mostrarResultado("Digite um número.", true);
        return;
    }

    const numero = Number(valor);
    const resultado = ehPrimo(numero);

    if (resultado) {
        mostrarResultado(`${numero} é um número primo.`);
    } else {
        mostrarResultado(`${numero} não é um número primo.`);
    }
}


function executarSomatorio() {

    const entrada = document.getElementById("numerosSomatorio").value;

    if (entrada.trim() === "") {
        mostrarResultado("Digite pelo menos um número.", true);
        return;
    }

    const numeros = converterNumeros(entrada);

    if (!numeros) {
        mostrarResultado("Digite apenas números válidos.", true);
        return;
    }

    const resultado = somatorio(numeros);

    mostrarResultado(`Somatório = ${resultado}`);
}


function executarFibonacci() {

    const valor = document.getElementById("numeroFibonacci").value;

    if (valor === "") {
        mostrarResultado("Digite a quantidade de termos.", true);
        return;
    }

    const numero = Number(valor);

    if (numero < 1 || !Number.isInteger(numero)) {
        mostrarResultado("Digite um número inteiro maior que zero.", true);
        return;
    }

    const resultado = fibonacci(numero);

    mostrarResultado(resultado.join(", "));
}


function executarMdc() {

    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;

    if (valor1 === "" || valor2 === "") {
        mostrarResultado("Digite os dois números.", true);
        return;
    }

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if (!Number.isInteger(numero1) || !Number.isInteger(numero2)) {
        mostrarResultado("O MDC deve ser calculado com números inteiros.", true);
        return;
    }

    if (numero1 === 0 && numero2 === 0) {
        mostrarResultado("Digite pelo menos um número diferente de zero.", true);
        return;
    }

    const resultado = mdc(numero1, numero2);

    mostrarResultado(`MDC = ${resultado}`);
}


function executarQuicksort() {

    const entrada = document.getElementById("numerosQuicksort").value;

    if (entrada.trim() === "") {
        mostrarResultado("Digite os números para ordenar.", true);
        return;
    }

    const numeros = converterNumeros(entrada);

    if (!numeros) {
        mostrarResultado("Digite apenas números válidos.", true);
        return;
    }

    const resultado = quickSort(numeros);

    mostrarResultado(resultado.join(", "));
}


function executarContagem() {

    const entrada = document.getElementById("numerosContagem").value;

    if (entrada.trim() === "") {
        mostrarResultado("Digite os números para contar.", true);
        return;
    }

    const numeros = converterNumeros(entrada);

    if (!numeros) {
        mostrarResultado("Digite apenas números válidos.", true);
        return;
    }

    const resultado = contarInteiros(numeros);

    mostrarResultado(`Quantidade de números inteiros = ${resultado}`);
}


// ==========================================
// AUXILIAR
// ==========================================

function converterNumeros(entrada) {

    const valores = entrada.split(",").map(valor => valor.trim());

    if (valores.some(valor => valor === "")) {
        return null;
    }

    const numeros = valores.map(Number);

    if (numeros.some(numero => !Number.isFinite(numero))) {
        return null;
    }

    return numeros;
}


// ==========================================
// INICIALIZAÇÃO
// ==========================================

criarFormulario("primo");
