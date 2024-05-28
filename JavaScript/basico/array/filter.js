const produto = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo vidro', preco: 15.22, fragil: true},
    {nome: 'copo plastico', preco: 7.50, fragil: false},
]

console.log(produto.filter(function(p){
    return p.preco > 7.50;
}));

console.log('============');

console.log(produto.filter(function(p){
    return p.preco > 2400 && p.fragil == true ;
}));

console.log('============ ou');

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil; 

console.log(produto.filter(caro).filter(fragil));