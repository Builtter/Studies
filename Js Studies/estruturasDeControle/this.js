/* THIS →  Se trata de uma forma de representar o elemento no qual está sendo utilizado naquele momento 
Possui contexto, podendo variar de acordo com a forma que foi declarada


This e funçao bind


*/


const pessoa = {
    saudacao: 'Olá marilene!!',
    falar() {
        console.log(this.saudacao); //Nesse contexto, THIS diz respeito a pessoa
    }
}
pessoa.falar();

const falar = pessoa.falar
falar() // Aqui temos um conflito de paradigma - This não aponta mais para pessoa, sim para  falar, onde não existe o atributo saudacao


const funcaoPessoaFala = pessoa.falar.bind(pessoa);// Por mais que o escopo possa ser mudado, bind direcionará a execução em pessoa
funcaoPessoaFala()

console.log('--------------------------------- This 2 ------------------------')

function Pessoa() {
    this.idade = 0

    // const self = this → alterando this para self o resultado será o mesmo

    setInterval(function () {
        this.idade++ //THIS aponta para setInterval e não pessoa
        console.log(this.idade)
    }/*.bind(this)*/, 1000) /*adicionando essa linha .bind(this) → this estará sendo referenciado com base em Pessoa */
}

new Pessoa
