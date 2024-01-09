const prod1 = {};
prod1.nome = 'Fone revolucionário';
prod1.preco = 4999.99;
prod1['Desconto_do_Dia'] = 0.4;

console.log(prod1);
console.log('-----------------------------------');


const prod2 = {
    nome: 'TeslaPhone',
    preco: 20000.99,
    Desconto_do_Dia: 0.2
}

console.log(prod2);

console.log(typeof Object); //Função
console.log(typeof new Object); // Quando instanciado 'NEW' se torna um objeto 


const Cliente = function () { }

console.log(typeof Cliente); //Função
console.log(typeof new Cliente); //Objeto

class Produto { } // Classe também são funções
console.log(typeof Produto);
console.log(typeof new Produto()); // Instanciando uma classe/função temos um objeto
