//notação literal

const obj1 = {};
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

//função construtora
function Produto(nome, preco, desc) {
    this.nome = nome; //escopo global
    this.getPrecoComDesconto = () => preco * (1 - desc); // possui retun implícito 
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


//função factory (padrão de projeto que cria objeto)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joca', 7980, 4);
const f2 = criarFuncionario('Dn.Maroca', 11400, 1);

console.log(f1.getSalario(), f2.getSalario());

//Object.create - Será estudad posteriormente
const filha = Object.create(null);
filha.nome = 'Jana';
console.log(filha);

//objeto com json
const fromJSON = JSON.parse('{"info": "Sou um json"}');
console.log(fromJSON.info);