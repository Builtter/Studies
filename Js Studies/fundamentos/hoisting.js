// hoisting - içamento -  direciona váriaveis definidas para todo documento, independente de possuirem valores ou não

console.log('a = ', a);
var a = 1;
console.log('a = ', a);

// Let respeita o momento da criação da variável dentro do corpo do programa

// console.log('b = ', b); // Gerando erro por não ter sido declarada antes
let b = 2;
console.log('b = ', b);

