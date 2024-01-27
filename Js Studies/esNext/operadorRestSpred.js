//operador ... rest(justa)/spred(separa)

//spred com objeto
const funcionario = { nome:'pablo', salario: 12000.00}
const clone = {ativo: true, ...funcionario}

console.log(clone);

console.log('========');

//spred array

const grupoA =['ana', 'pedro', 'bia'];
const grupoB =['SOFIA', ...grupoA, 'JONAS'];
console.log(grupoB);