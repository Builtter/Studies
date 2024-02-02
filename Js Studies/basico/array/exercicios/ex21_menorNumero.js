function menorNumero(arr) {
    var organizado = arr;

    organizado.sort((a, b) => a - b) //apenas sort não é o suficiente para organizar todo array
    // a - b → ordem crescente do menor para o maior
    // b - a → ordem decrescente do maior para o menor

    console.log(organizado[0]);
}

menorNumero([1, 2, 0, 1, -1, -100, -100.00009])