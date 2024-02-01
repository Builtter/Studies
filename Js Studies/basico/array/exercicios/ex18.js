var listaA = [
    { nome: 'jornal', categoria: 'informação', preco: 89.99 },
    { nome: 'cinema', categoria: 'forfun', preco: 150 }
];
var listaB = [
    { nome: 'telefone', categoria: 'eletronicos', preco: 3599.99 },
    { nome: 'Pc gamer', categoria: 'eletronicos', preco: 30999.90 }
];

//MODO 1
function somaDespea(itens) {
    var totalizador = 0
    for (let item of itens) {
        totalizador += item.preco;
    }
    return totalizador;
}

console.log(somaDespea(listaA));
console.log(somaDespea(listaB));