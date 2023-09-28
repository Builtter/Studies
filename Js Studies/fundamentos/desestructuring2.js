
// com arrey obj → {} array → []

const [a] = [10]; // Criando variavel A que recebeu o valor de 10
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);

//Usando destructuring com função

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({ max: 30, min: 50 }));

console.log(Math.random());
console.log(Math.floor(3.5));

var val = (0.5628136767773504) * (50 - 30) + 30;
console.log(Math.floor(val));

function rando([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log('---temos aqui o caso rand');
console.log(rand({ min: 0, max: 50 }));

console.log('---temos aqui o caso rando');
console.log(rando([50, 100]));
console.log(rando([154]));
console.log(rando([, 100]));
// console.log(rando()); // erro pois não existe elementos a serem desestruturados para realizar a operação.


