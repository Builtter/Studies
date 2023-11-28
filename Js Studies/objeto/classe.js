// Brincar com controle financeiro

class Lancamento {
    constructor(nome = 'generico', valor = 0 ){ // cria um objeto com as informações de lançamento
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano){// cria um objeto com as informações de de mes e ano
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos){ //incrementa dados com base no construtor de lançamentos
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() { // com base nos valores de lançamentos será incrementado seus respectivos valores, retornando seu total final
        let valorConsolidado = 0;
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }

}

const salario = new Lancamento('Salario', 5500);
const contaLuz = new Lancamento('Luz', -150);

const contas = new CicloFinanceiro(11, 2023)
contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario());
