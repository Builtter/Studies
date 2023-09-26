console.log(Math.ceil(6.1));
// Acessando a funcionalidade de arredondamento do objeto Marh

const obj = {};
obj.nome = 'Bola';
obj['nome2'] = 'Bola quadrada';

console.log(obj);
console.log("Acesando um elemento do objeto: " + obj.nome);

function Obj(nome) {
    this.nome = nome; // this torna o elemento público independente do escopo (vale para todos docs?)
    this.exec = function () {
        console.log('Executou? ..... Executei!!');
    }
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('Banco');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();