console.log(typeof Object); //Função
console.log(typeof new Object); // Quando instanciado 'NEW' se torna um objeto 


const Cliente = function () { }

console.log(typeof Cliente); //Função
console.log(typeof new Cliente); //Objeto

class Produto { } // Classe também são funções
console.log(typeof Produto);
console.log(typeof new Produto()); // Instanciando uma classe/função temos um objeto
