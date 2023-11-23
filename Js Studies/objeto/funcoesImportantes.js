const pessoa = {
    nome: 'Fofocalicia',
    idade: 15,
    peso: 25,
    altura: 1.30
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); // Retorna um array com as chaves e valores do objeto (entradas == entries)

// Object.entrise(pessoa).forEach(e => {
//     console.log(`${e[0]}: ${e[1]}`);
// }); → Object.entries recebei alterações, dessa forma não está reconhecendo mais o objeto manuseado

for (const e of Object.entries(pessoa)) { // feito por evento, acessando chave e valor
    console.log(`${e[0]}: ${e[1]}`);
}

//também pode ser feito da segiunte maneira 

console.log('----------------------------------------------------');
for (const [chave, valor] of Object.entries(pessoa)) { //feito acessando diretamente chave e valor
    console.log(`${chave}: ${valor}`);
}


console.log('----------------------------------------------------'); // defineProperties mudou 
Object.defineProperties(pessoa, {
    'dataNascimento': {
        enumerable: true, // pode ser listado e consulta
        writable: false, //não pode ser alterado
        value: "01/01/2019"// valor padrão e não alteravel com base na propriedade acima
    },
})

pessoa.dataNascimento = '01/01/2000'; // Não será realizado
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

console.log('----------------------------------------------------'); 
const destino = {a: 1};
const oA = {b: 2}
const oB = {c: 3, a:4}

const registro = Object.assign(destino, oA, oB); //todos serão acrescentados ao destino, prevalecerá o valor do ultimo objeto associado

console.log(destino);
console.log(registro); // mas existe um objeto que pode receber todos incrementos

console.log('----------------------------------------------------'); 
Object.freeze(registro);
registro.c = 123; //Não será alterado pois seu valor está congelado
console.log(registro);
