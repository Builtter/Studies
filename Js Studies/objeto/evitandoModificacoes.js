// Object.preventExtensions - Limita incremento em objetos mas possibilita exclusão e alteração de valores


const produto = Object.preventExtensions({
    nome:'qualquer', preco:2.0, tag:'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Cubo Mágico';
produto.descricao = 'Brinquedo'; // Não será feito pois o objeto não recebe incremetntos
delete produto.tag;
console.log(produto);


//Object.seal - permite alterações de valores mas não permite exclusão

const pessoa = {nome: 'Juju', idade: 35}
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Alves';//Não é posssível adicionar novos valores
delete pessoa.nome; // Não é possível deletar componentes existentes
pessoa.idade = 30 // Possível aterar valores
console.log(pessoa);