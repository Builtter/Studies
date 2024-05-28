/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function dividindo(dividendo,divisor){
    let resultado = dividendo/divisor;
    let resto =  dividendo%divisor;

    return `Resultado da divisão ${resultado} e resto ${resto}`;
}

console.log(dividindo(10,2));
console.log(dividindo(5,2));
