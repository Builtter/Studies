const aprovados = ['junior','tadeu','joaquin','hernane','peter'];

aprovados.forEach(function(aluno, indicie){
    console.log(`${indicie +1} ${aluno} `);
});

console.log('------------------');

aprovados.forEach(nome => console.log(nome));

console.log('------------------');

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados);

// o indicie sempre será passado, mas caso queira ter acesso a ele, o primeiro parametro sempre deverá ser passado
