//Modo 2
function filtraQtDigitos(arr, qtDig) {
    const condTrue = [];

    for (numero of arr) {
        if (numero.toString().length == qtDig) {
            condTrue.push(numero);
        }
    }
    console.log(condTrue);
}

//Modo 2
function filtraQtDigitos2(arr, qtDig) {
    var resultado = [];

    resultado = arr.filter((numero) => numero.toString().length == qtDig);

    console.log(resultado);
}

var arr1 = [1, 5, 9, 30, 4, 22, 223, 184, 0,1234];
var arr2 = ["abra", "cadabra"];

filtraQtDigitos(arr1, 4)
filtraQtDigitos2(arr2, 4)

//obs.: Numeros não possuem tamanho metrificado por length, converta em string e depois utilize .length para tal