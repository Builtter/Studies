const fs = require('fs')

const produto = { 
    nome: 'Telefone',
    preco: 3000.00,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo!');
})