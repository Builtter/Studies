console.log(soma(5, 5));

// function declaration → Vantágem, as funções são declaradas antes mesmo de qualquer tipo de execução de operação, sendo possível trabalhar operações antes mesmo da declaração da função
function soma(x, y) {
    return x + y;
}

// console.log(sub(5, 5))//ReferenceError: Cannot access 'sub' before initialization
// function expression →  
const sub = function (x, y) {
    return x - y;
}
console.log(sub(5, 5));

// console.log(mult(5, 5)) //Cannot access 'mult' before initialization
//named function expression → Pouco usada
const mult = function mult(x, y) { // vantágem para esse método seria a identificação da função no debug, onde aparecerá o nome da function com problema caso ocorra.
    return x * y;
}
console.log(mult(5, 5))
