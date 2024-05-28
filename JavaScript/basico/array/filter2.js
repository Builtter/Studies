Array.prototype.filter2 = function(callback){
    const newArray=[];
     for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
     }
     return newArray;
}

const produto = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo vidro', preco: 15.22, fragil: true},
    {nome: 'copo plastico', preco: 7.50, fragil: false},
]

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil; 

console.log(produto.filter2(caro).filter2(fragil));