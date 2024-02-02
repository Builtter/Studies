function retiraVogal(palavra) {
    const listaVogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

    listaVogais.forEach(vogal => palavra = palavra.replace(vogal, ''));

    return palavra
}

console.log(retiraVogal('ITALO'));
console.log(retiraVogal('Palavra')); //Por que essa não vai?
console.log(retiraVogal('Fundamentos'));

//modo 2
function retiraVogal2(palavra) {
    return palavra.replace(/[aeiou]/ig, ''); // super diferente, seria react?
}

console.log(retiraVogal2('ITALO'));
console.log(retiraVogal2('Palavra')); //Esse funfa aqui - poxa
console.log(retiraVogal2('Fundamentos'));
