const carro = {
    modelo: 'A3',
    valor: 8900,
    proprietario: {
        nome: 'Armando',
        idade: 25,
        endereco: {
            logradouro: 'Rua 321',
            numero: 3
        }
    },

    condutores: [{
        nome: 'Junior',
        idade: 30
    },
    {
        nome: 'Janaina',
        idade: 32
    }],

    calcularValorSeguro: function(){
        //.....
    }
}

carro.proprietario.endereco.numero = 1000;

console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);
console.log(carro.condutores); // undefined pois não está definido dentro do objeto carro