const sequencia = {
    _valor: 1, // Convenção - apenas indica que o valor da variável pretende ser mantido

    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100;
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)