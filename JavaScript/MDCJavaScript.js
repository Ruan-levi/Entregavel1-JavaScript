let numero1 = 87;
let numero2 = 36;

while (numero2 != 0) {

    let resto = numero1 % numero2;
    numero1 = numero2;
    numero2 = resto;
}
console.log("MDC =", numero1);