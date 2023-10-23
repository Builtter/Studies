/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

Equilátero: Os três lados são iguais;
Isósceles: Dois lados iguais;
Escaleno: Todos os lados são diferentes.
*
*/

console.log('--------------------------------- Qual triângulo?  ------------------------')

function triangulo(a,b,c){
    if (a == b && b == c){
        console.log(`Temos um triângulo Equilátero, a = ${a}, b = ${b} e  c = ${c}`);
    } else if (a != b && b != c && c!= a){
        console.log(`Temos um triângulo Escaleno, a = ${a}, b = ${b} e  c = ${c}`);
    } else {
        console.log(`Temos um triângulo Isósceles, a = ${a}, b = ${b} e  c = ${c}`);
    }
}

triangulo(2,2,2);
triangulo(3,2,1);
triangulo(3,2,1);


