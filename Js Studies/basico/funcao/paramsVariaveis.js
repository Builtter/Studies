function somaArg() {
    let soma = 0;
    for (i in arguments) { //arguments → Corresponde a uma funcionalidade disponível em um array interno de uma função
        soma += arguments[i];
    }
    return soma;
}

console.log(somaArg());
console.log(somaArg(20, 30));
console.log(somaArg(20, 25.2, 3.4, 4, 9));

//Fora do esperado
console.log(somaArg(20, 30, 'TESTE'));
console.log(somaArg('Aqui ', 'temos ', 'pederneiras......', ' AIAI!!!!'));
console.log(somaArg('Aqui ', 'temos ', 'pederneiras......', ' AIAI!!!!'));
