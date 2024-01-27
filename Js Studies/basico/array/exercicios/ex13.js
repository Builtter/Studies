//filtrar numeros de array
function filtrarNumeros(arr) {
    var novoArray = [];

    arr.forEach(element => {
        if (typeof (element) === 'number') {
            novoArray.push(element)
        };
    });
    return novoArray;
}

console.log(filtrarNumeros(["js", 1, "3", "web", 2]));

/*
para a situação, isNaN não é recomentado pois mesmo que um numero seja informado como string
ainda sim é interpretado como um numero
!isNaN(element) → Não recomendado
*/
console.log(typeof ("1"));
console.log(typeof (1));