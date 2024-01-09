const a = 7;
let b = 3;

b += a // atribuição aditiva no valor de b → mesmo que b = b + a
console.log(b);

b -= 4 // atribuição subtrativa → b = b - a
console.log(b);

b *= 2 // b = b * 2
console.log(b);

b /= 2 // b = b / 2
console.log(b);

b %= 2// b = b % 2 → Quando o resto é PAR 0 se for IMPAR 1
console.log(b);


console.log('------------------Destructuring-------------');
//Retirar elemento de estrutura

const pessoa = {
    nome: 'jão',
    idade: 34,
    peso: 88,
    endereco: {
        logradouro: 'Rua jamel da Cunha',
        numero: 268
    }
}

const { nome, peso } = pessoa;
console.log(nome, peso);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, dormiu = true } = pessoa; // caso um valor não tenha sido atribuído a um atrbuto do objeto, é possível setar um valor padrão de retorno para ele
console.log(sobrenome, dormiu); // Caso não tenha sido definido, seu retorno é undefined

const { endereco: { logradouro: logra, numero: casaNumero, cep } } = pessoa;
console.log(logra, " Casa nº: " + casaNumero, cep);

// Continuar na aula 65 Operadores: Destructuring #02