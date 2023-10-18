class Pessoa {
    constructor(nome) {
        this.nome = nome // se torna público a partir da instanciação da classe
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) // This acessa o escopo do objeto que foi criado, apenas nome não seria reconhecido 
    }
}
const p1 = new Pessoa('Joca')
p1.falar()

//Transformando em contrutora

function PessoaF(nome) {
    this.nome = nome;

    this.falar = function () {
        console.log(`Meu nome com base na construtora é ${this.nome}`)
    }
}

const p2 = new PessoaF('Patagonia')
p2.falar()