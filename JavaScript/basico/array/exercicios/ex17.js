function somaNumeros(array) {
    var total = array.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0)
    console.log(total);
    // return total
}
var numeros = [10, 70, 22, 43];
somaNumeros(numeros)
// console.log(somaNumeros(numeros));