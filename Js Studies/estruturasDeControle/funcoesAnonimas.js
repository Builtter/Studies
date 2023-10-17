const soma = function (x, y) { // função anônima é uma função que não possui nome
    return x + y;
}

console.log(soma(20, 30));

const imprimirResultado = function (a, b, operacao = soma) { // função que possui 3 parâmetros, a, b e operacao que caso não passado nada, recebe o padrão da função soma acima
    console.log(operacao(a, b));
}

imprimirResultado(20, 30);
imprimirResultado(20, 30, soma);// pode-se estar criando novas funções com operações diferentes para estar executando a operação, mas por padrão, é soma;

//passando função anônima
imprimirResultado(20, 30, function (x, y) { //  foi passado uma operação para esssa função, como informada, a função padrão (soma) foi ignorada
    return x - y;
})

// utilizando arrow function
imprimirResultado(20, 30, (x, y) => x * y); // muito mais simples → lendo: uma função que recebe

//criando função anônima dentro de um objeto
const pessoa = {
    falar: function () {
        console.log('Estamos aqui!!');
    }
}
pessoa.falar();