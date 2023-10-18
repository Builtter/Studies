//A diferença entre call e apply está na hora que a função é passada quando o método é invocado.

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`; // This para uma função normal, acessa o GLOBAL 
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// global.preco = 20;
// global.desc = 0.1;
console.log(getPreco()) //Não reconhece os parametros para tratamento dentro da função pois os valores não estão contidos no escopo global a não ser que sejam declarados
console.log(produto.getPreco())

//Aplicando a mesma função para um novo produto
const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro));//Com call, a função é chamada para ser aplicada a um novo objeto
console.log(getPreco.apply(carro));//

console.log('----------')
//A forma como os parâmetros são passados é o que diferencia call e aplly
console.log(getPreco.call(carro, 0.17, '$')); // objeto, atributos
console.log(getPreco.apply(carro, [0.17, '$'])); // objeto, [atributo,atributo]

