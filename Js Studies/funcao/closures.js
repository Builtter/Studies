/*
Closures == Fechamentos
• Closure é o escopo cria do quando uma função é declarada
• Esse escopo permite que a função acesse e manipule variáveis externas à função
*/

//Escopo global
const x = 'Global';

function fora() {
    const x = 'Local'; // dentro da função fora
    function dentro() {
        return x;
    }
    return dentro;
}

// Qual o valor de X? → Local pois a função respeita o escopo onde foi criada

const minhaFuncaoF = fora() // valor → Local
console.log(minhaFuncaoF())

// const minhaFuncaoD = dentro() // dentro is not defined, não foi definido dentro da função
// console.log(minhaFuncaoD())


console.log('---------------- Novo Exemplo ----------------')

var a = 10;
function foo() {
    var b = 20;
    function bar() {
        var c = 15;
        var output = a + b + c;
        return output;
    }
    return bar;
}

// console.log(a, b, c); // nesse contexto, b e c não estão definidos no escopo para serem acessados

const funciona = foo();
console.log(funciona());// por que conseguiu acessar o valor das 3 variáveis????????