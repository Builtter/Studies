class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Menu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joaquin')
p1.falar()

const p2 = new Pessoa('Marques')
p2.falar()

const p3 = new Pessoa('Tião')
p3.falar()