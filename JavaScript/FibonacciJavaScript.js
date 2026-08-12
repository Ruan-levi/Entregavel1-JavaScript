let numero = 10;

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= numero; i++) {

    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}