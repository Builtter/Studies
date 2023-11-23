// pessoa - memoria destinada
const pessoa = {nome: "jão"}
pessoa.nome = 'pedro';
console.log(pessoa);


Object.freeze(pessoa); //congela o objeto juntamente com seus valores, sendo impossível realizar alteraçãoes a partir de sua criação

pessoa.nome = 'marcos';
console.log(pessoa.nome);