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
console.log(ferrari.__proto__===Object.prototype);//true
console.log(Object.prototype.__proto__);//null

console.log('--------------------------------------------------');

//cadeia de prototipos (prototype chain)
const avo = {attt1: 'A'}
const pai = {__proto__: avo, attr2:'b'}
const filho = {__proto__: pai, attr2:'b'}

console.log(filho.attt1);

console.log('--------------------------------------------------#2');


const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMias(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }
        else{
            this.velAtual = this.velMax;
        }
    },

    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const lamburgini = {
    modelo: 'tiger',
    velMax: 350//shadowing - está sobrescrevendo a relação que antecede esse objeto
}

const fiat = {
    modelo: 'Uno',

    status(){
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

