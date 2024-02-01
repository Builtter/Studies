// Modo 1

function valParIndexPar(array) {
    let resultado = [];

    for (let i = 0; i < numeros.length; i += 2) { // i += 2 para percorrer somente os indices pares
        const numeroPar = numeros[i] % 2 === 0;

        if(numeroPar){
            resultado.push(numeros[i])
        }
    }
    return resultado;
}

var numeros = [10, 70, 22, 43];

console.log(valParIndexPar(numeros));


// Modo 2

function valParIndexPar2 (numeros){
    return numeros.filter((numero,indice) => {
        const numeroPar = numero % 2 === 0;
        const indicePar = indice % 2 === 0;

        return numeroPar && indicePar;
    })
}

console.log(valParIndexPar2(numeros));


