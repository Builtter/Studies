let valor; // Variavel inicializada mas seu valor não foi delcarado 
console.log(valor); // Seu valor não foi definido ainda gerando o erro undefined

//console.log(valor2); Aqui gerará o erro is not defined onde a variável nem se quer foi inicializada no programa

valor = null; // Ausência de valor
console.log(valor);

// console.log(valor.toString()); annot read properties of null (reading 'toString')

const produto = {};
console.log(produto.preco); //Gerará erro por mais que a contante tenha cido declarada, o erro estará contido no atributo solicitado que não foi declarado - undefined
console.log(produto); // obj vazio

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //Evitar esse tipo de operação
console.log(!!produto.preco); // False corresponde ao valor contido para o atributo do obj. sendo ele undefined || false
// delete produto.preco; //Recomendado para retirada de valores indesejados
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);


