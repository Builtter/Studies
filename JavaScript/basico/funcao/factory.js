// Factory simples

function criarPessoa() {
    return {
        nome: 'Adriano',
        sobrenome: 'Martinez'
    }
}

console.log(criarPessoa());

// Criando produtos no estoque

function addItemEstoque(nome, cod, quantidade) {
    return {
        nome,
        cod,
        quantidade,
        desconto: 0.1
    }
}


console.log(addItemEstoque('Cigarro', 1254887, 20));
console.log(addItemEstoque('Baralho', 1256468, 90));
console.log(addItemEstoque('Pitu', 7845568, 13));
console.log(addItemEstoque('Tira Gosto', 135483, 5, 0.05)); // Não espera o recebimento de um novo parâmetro, logo não será adicionado 


