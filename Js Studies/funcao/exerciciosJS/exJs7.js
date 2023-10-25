/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/


function calculandoBhaskara(a,b,c){

    function calculaDelta(a,b,c){
        return (b**2) - 4 * a * c;
    }
    
    let delta = (b**2) - 4 * a * c;

    if (delta < 0){

        return `Delta é negativo`;

    }else if (delta = 0){

        let bhasDeltaZero = (- b)/2*a;
        let segundoGrau = a*(bhasDeltaZero**2) + (b * bhasDeltaZero) + c;

        return `Delta = 0, a equação do segundo grau possui uma raiz real
        Em Bhaskara com delta = 0, X corresponde a ${segundoGrau}`; 

    }else{

        let bhasDeltaPositivo = (- b + Math.sqrt(delta))/2*a;
        let bhasDeltaNegativo = (- b - Math.sqrt(delta))/2*a;

        let segundoGrauPos = a * (bhasDeltaPositivo**2) + (b * bhasDeltaPositivo) + c;
        let segundoGrauNeg = a * (bhasDeltaNegativo**2) + (b * bhasDeltaNegativo) + c;

        return `A equação do segundo grau possui duas raizes reais
        Em Bhaskara+, X corresponde a ${segundoGrauPos} e em Bhaskara-, X corresponde a ${segundoGrauNeg}`;
    }
}

console.log(calculandoBhaskara(calculaDelta(1,8,-9)));

// console.log(calculandoBhaskara(3,-5,12)) // Delta é negativo
// console.log(calculandoBhaskara(1, 8,-9)) // 