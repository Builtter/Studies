for (let letra of 'Cora') {
    console.log(letra);
}

const assuntosEcma = ['map', 'set', 'promise']

console.log('============= INDICE');

for (let i in assuntosEcma) {
    console.log(i);
}

console.log('============= VALOR');

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

console.log('=============');

const assuntoMap = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['promise', { abordado: false }]
])

for (let assunto of assuntoMap) { // percorre chave e valor
    console.log(assunto);
}
console.log('============= KEYS');

for (let chave of assuntoMap.keys()) { // percorre chave
    console.log(chave);
}

console.log('============= VALUE');

for (let valor of assuntoMap.values()) { // percorre valor
    console.log(valor);
}

console.log('============= destructuring');

for (let [chave, valor] of assuntoMap.entries()) { // percorre chave e valor
    console.log(chave, valor);
}

console.log('=============');
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra);
}