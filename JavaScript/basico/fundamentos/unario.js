let n1 = 1;
let n2 = 2;

n1++; //Pós fixado 
console.log(n1);

--n1; // Pré fixado → maior precedência pois vem antes
console.log(n1);

console.log(++n1 === n2--); // True pois a subtração veio depois → calsa confusão na leitura

console.log('--------------Ternário--------------');

const resultado = nota => nota >= 7 ? 'Passou' : 'Reprovou'; // Dividido em 3 partes, condição V ou F ? ResultadoV : ResultadoF
console.log(resultado(7.2));
console.log(resultado(6.9));
