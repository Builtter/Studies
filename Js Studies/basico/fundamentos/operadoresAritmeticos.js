const [a, b, c, d] = [3, 5, 1, 15];
console.log(a, b, c, d);

const soma = a + b + c + d;
const subtra = d - b;
const multi = a * b;
const divi = d / a;
const modulo = a % 2; //Caso o resto seja 1 (impar) 0 (par)

console.log(soma, subtra, multi, divi, modulo);


console.log('--------------RELACIONAIS--------------'); // Compara o valor

console.log('01)', '1' == 1); // Compara o valor
console.log('02)', '1' === 1); // Compara o valor e tipo
console.log('03)', '3' != 3); // Compara o valor
console.log('04)', '3' !== 3); // Compara o valor e tipo

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);
// console.log('09)', 3 );

const d1 = new Date(0);
const d2 = new Date(0);

console.log(d1);
console.log('Teste getTime', d1.getTime());

console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);