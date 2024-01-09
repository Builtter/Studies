class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor (sobrenome, profissao='professor'){
        super(sobrenome)// setta o sobrenome do antecessor(avô) caso não seja settado nesse bloco
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('silva'); // Setta sobrenome a seu antecessor
    }
}

const filho = new Filho
console.log(filho);