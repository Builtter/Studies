function indiceEnumPar(val) {

    if (val.indexOf % 2 == 0) {
        return val;
    }
}


var numeros = [10,70,22,43];

var tudoPar = numeros.filter(indiceEnumPar);

console.log(tudoPar);