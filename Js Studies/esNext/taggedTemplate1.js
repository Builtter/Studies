function tag(partes,...valores){
    console.log(partes);
    console.log(valores);
    return 'outra string'
}

const nome = 'Piau';
const situacao = 'aprovado';

console.log(tag `${nome} está ${situacao}`);