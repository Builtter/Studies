class Pessoa {
    constructor(nome) {
        this.nome = nome // se torna público a partir da instanciação da classe
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) // This acessa o escopo do objeto que foi criado, apenas nome não seria reconhecido 
    }
}

const p1 = new Pessoa('Joaquin')
const p2 = new Pessoa('Marques')
const p3 = new Pessoa('Tião')
p1.falar()
p2.falar()
p3.falar()

const criarPessoa = nome => { // Possui ciência do escopo onde foi criado
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p4 = criarPessoa('Jaque');
p4.falar()

// Alterando classe Pessoa para factory

const pessoaF = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

//com base na classe
const p5 = pessoaF('Tadeu')
p5.falar()