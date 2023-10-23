/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/


console.log('--------------------------------- Com Arrow Function ------------------------')

soma = (a, b) => a + b;

sub = (a, b) => a - b;

mult = (a,b) => a*b;

div = (a,b) => a/b;

console.log(`Aqui temos a soma ${soma(2,3)}`); // 5
console.log(`Aqui temos a subtração ${sub(2,3)}`); //-1
console.log(`Aqui temos a multiplicação ${mult(2,3)}`); // 6
console.log(`Aqui temos a divisão ${div(2,3)}`);//0.66666666