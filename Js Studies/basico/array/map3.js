Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.20}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "lapis", "preco": 15.22}',
    '{"nome": "caneta", "preco": 7.50}',
    '{"nome": "mochila", "preco": 35.00}'
]

//Retornar preços

//1º transformar json em objeto
const jsonObjeto = json => JSON.parse(json);
const preco = produto => produto.preco;

const result = carrinho.map2(jsonObjeto).map(preco);

console.log(result);