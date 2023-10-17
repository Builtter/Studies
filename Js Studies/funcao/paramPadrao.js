//Estratégia 1 para gerar padrão

function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    // ou (||) priorizará verdadeiro, assim incrementando o valor de 1 em casos de falsidade

    return a + b + c;
}

console.log(!!1);

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
console.log(soma1('aqui', 0, 'numeros'));

//Estratágia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1; // A - é diferente de undefined (?) - A recebe o valor de A - senão (:) - A recebe 1 
    b = 1 in arguments ? b : 1;// Existe o valor no indicie 1(B)? - B recebe o valor de B - senão (:) - B recebe 1
    c = isNaN(c) ? 1 : c;// C NÃO É NUMERO ? -  (TRUE) C recebe o valor 1 - senão (:) - C recebe C → corresponde a validação mais segura/robusta

    return a + b + c;
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//valor padrão es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));

console.log("3" + "3" - "3")