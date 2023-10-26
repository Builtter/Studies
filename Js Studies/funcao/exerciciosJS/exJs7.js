/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

function calculandoBhaskara(a,b,c){
    
    const delta = (a,b,c) => (b**2) - 4 * a * c;

    if (delta(a,b,c) < 0){

        return `Delta é negativo`;

    }else if (delta(a,b,c) === 0){

        let xisDeltaZero = -b/(2*a);
        let segundoGrau = a*(xisDeltaZero**2) + (b * xisDeltaZero) + c;

        return `Delta = 0, o resultado da equação de segundo grau ( ${a}X²${(b)}X+${c} ) com os valores corresponde a ${segundoGrau}`; 

    }else{

        let xisDeltaPositivo = (- b + (Math.sqrt(delta(a,b,c))))/2*a;
        let xisDeltaNegativo = (- b - (Math.sqrt(delta(a,b,c))))/2*a;

        let segundoGrau = a * (xisDeltaPositivo**2) + (b * xisDeltaPositivo) + c;

        return `O resultado da equação de segundo grau ( ${a}X²${(b)}X+${c} ) com os valores corresponde a ${segundoGrau}
X' = ${xisDeltaPositivo} e X'' = ${xisDeltaNegativo}`;
    }
}
console.log('---------------')

console.log(calculandoBhaskara(3,-5,12)) // Delta é negativo

console.log('---------------')

console.log(calculandoBhaskara(7,3,4)) // Delta = zero → Continuar melhorando

console.log('---------------')

console.log(calculandoBhaskara(1,8,-9)); // Duas Raizes