let num = 11;
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
console.log(ehPrimo(num));