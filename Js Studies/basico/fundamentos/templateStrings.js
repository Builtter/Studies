const nome = 'Joaquim';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá    seu nome é
    ${nome}!`;

// `` captura espaçamentos e quebras de linhas dentro de seu conteúdo sendo diferente de ''

console.log(concatenacao, template);

// Expressóes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei fela..... ${up('tome cuidado vice?')}`);