console.log('--------------------------------- This + Arrow Function ------------------------')


let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => { /*função arrou sempre se trata de uma função anonima, tendo necessidade de armazená-la em uma variacel caso deseje utilizaá-la*/
    return 2 * a;
}

dobro = a => 2 * a; /*Função de linha única + Possui retorno implícito*/

console.log(dobro(Math.PI))


let ola = function () {
    return 'olá'
}

ola = _ => 'Olá'; // Possui um parametro

console.log(ola())

console.log('--------------------------------- This + Arrow Function =>  ------------------------')


function Pessoa() {
    this.idade = 0

    setInterval(() => { // arrow function implementa o escopo do this, nesse contexto, referenciando Pessoa() e não SetInterval()
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

console.log('--------------------------------- This + Arrow Function ------------------------')

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // no contexto NODE - global diz respeito ao objeto global no browser, global = window

const obj = {}
comparaComThis = comparaComThis.bind(obj) // associando o this do comparaComThis ao obj
comparaComThis(global) // False pois this não está mais associado ao objeto global
comparaComThis(obj) // True pois o valor agora está associado ao obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // não corresponde ao global pois está referenciado ao modulo corrente de comparaComThisArrow - this
comparaComThisArrow(module.exports) // OU
comparaComThisArrow(this)


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Função arrow possui maior prioridade, assim não sendo alterada
comparaComThisArrow(module.exports)
