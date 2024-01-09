console.log('--------------------------------------------------#1');

const ferrari = {
    modelo: 'A44',
    velMax: 340
}

const volvo = {
    modelo: 'b44',
    velMax: 200
}

console.log(ferrari.__proto__); //[Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype);//true
console.log(Object.prototype.__proto__);//null

console.log('--------------------------------------------------');

//cadeia de prototipos (prototype chain)
const avoo = { attt1: 'A' }
const paii = { __proto__: avoo, attr2: 'b' }
const filhoo = { __proto__: paii, attr2: 'b' }

console.log(filhoo.attt1);

console.log('--------------------------------------------------#2');


const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMias(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        }
        else {
            this.velAtual = this.velMax;
        }
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const lamburgini = {
    modelo: 'tiger',
    velMax: 350//shadowing - está sobrescrevendo a relação que antecede esse objeto
}

const fiat = {
    modelo: 'Uno',

    status() {
        return `${this.modelo} : ${super.status()}` //Super - referencia o projeto relacionado, contrário ao shadowing
    }
}

Object.setPrototypeOf(lamburgini, carro); // Define relação de prototipo, entre doia objetos, one o primeiro é um obj, segundo um protótipo do projeto
Object.setPrototypeOf(fiat, carro);

console.log(lamburgini);
console.log(fiat);

fiat.acelerarMias(100);
console.log(fiat.status());

lamburgini.acelerarMias(300);
console.log(lamburgini.status());

console.log('--------------------------------------------------#3');

const pai = { nome: 'pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai);
filha1.nome = 'Ana';

console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome);

filha2.nome = 'Jumeiri';

console.log(`${filha2.nome} tem cabelo de cor ${filha2.corCabelo}`)

console.log(filha1.nome); // Por padrão uma vez que um objeto é referenciado a um prototipo, ele receberá seus parametros com enumerable = false
console.log(filha2.nome);// esses atributos só foram listados pois receberam alterações durante sua criação
console.log('---------------------------');


for (let chave in filha2) {
    filha2.hasOwnProperty(chave) ? console.log(chave) : console.log(`por herança: ${chave}`);
}

console.log('--------------------------------------------------#4');

function MeuProjeto() { }
console.log(MeuProjeto.prototype);

const obj1 = new MeuProjeto;
const obj2 = new MeuProjeto;

console.log(obj1.__proto__ === obj2.__proto__);// objetos criados a partir de um mesmo projeto apontam para o mesmo protoripo
console.log(MeuProjeto.prototype === obj2.__proto__);


MeuProjeto.prototype.nome = 'Anônimo';
MeuProjeto.prototype.falar = function () {
    console.log(`Olá, meu nome é ${this.nome}!`);
}

obj1.falar()

obj2.nome = 'Renato';
obj2.falar()

const obj3 = {};
obj3.__proto__ = MeuProjeto.prototype

obj3.nome = 'obj3'
obj3.falar()

console.log('--------------------------------------------------#5');

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// Toda função possui um atributo prototype e podem receber novos atributos e funcionalidades mas
// é importante entender o que está sendo feito para evitar qualquer tipo de problema

console.log('--------------------------------------------------#6');
 

function aula(nome, idVideo){ // função construtora
    this.nome=nome;
    this.idVideo = idVideo;
}

const aula1 = new aula('Apresentação', 1)
const aula2 = new aula('função aninhada', 55)

console.log(aula1, aula2);

//Simulando instância new
function novo(func, ...params){// consjunto de parametros encaminhados na função, concatenando em um array
    const obj = {}
    obj.__proto__ = func.prototype //direcionando para onde o novo objeto estará apontando
    func.apply(obj, params)
    return obj;
}

const aula3 = novo (aula,'spred', 56)
const aula4 = novo (aula,'spred #2', 57)

console.log(aula3, aula4);