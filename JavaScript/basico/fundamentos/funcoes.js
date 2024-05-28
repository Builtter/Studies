console.log(typeof Object);

class Produto { };
console.log(typeof Produto);


console.log("------------------------------------"); // Função sem retorno

function imprimeSoma(a, b) {
    console.log(a + b);
};

imprimeSoma(20, 30);
imprimeSoma(2); // somaria o valor indicado para a (2) + valor indicado para b (undefned): numero + string = Not a Number NaN
imprimeSoma(2, 33333, 5, 4, 8, 6, 4, 8); // soma somente o que está declarado na função, sendo apenas os primeiros parametros passados para a operação
imprimeSoma(); //nada decladado erro NaN
console.log("------------------------------------"); // Função com retorno

// Definindo valor padrão para atributo recebido caso não informado
function soma(a, b = 0) {
    return a + b;
};

soma(30); // Apenas retorna o valor, para ser mostrado, utiliza-se outro metodo
console.log(soma(30)); // Por padrão para essa função, o valor a será somado ao de b
console.log(soma(30, 20)); // Caso informado o valor de b, o mesmo será somado com o de a conforme a função

console.log("------------------------------------"); // Armaenando uma função em uma variavel

const mostraSoma = function (a, b) {
    console.log(a + b);
};
mostraSoma(30, 88);

console.log("------------------------------------"); // Funcao arrow    

const somaArrow = (a, b) => {
    return a + b;
};
console.log(somaArrow(30, 20));

console.log("------------------------------------"); // Retorno implicito

const subtracao = (a, b) => a - b; // Arrow function com retorno simplificado -> sendo possível se a funcao nao tiver mais de uma operacão (sem a ecessidade de um bloco de código)
console.log(subtracao(30, 50));

const consoleLog = valor => console.log(valor);
consoleLog("Bem simplificado!!");