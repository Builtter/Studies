// arrow function

const soma = (a  ,  b) => a+b;
console.log(soma(1, 3));

console.log('=============');
//arrow function (this)
const lexico1 = () => console.log(this===exports);
const lexico2 = lexico1.bind({}); // apontaria para o objeto mas por se tratar de arrow function, não pode ser feito pois sempre apontará par onde foi criada
lexico1();
lexico2();

console.log('=============');
//parametro default
function log(texto = 'valor_padrão'){
    console.log(texto);
}

log('pindamanhagaba');
log();

console.log('=============');
// operador rest == agrupador 

function total(...numeros){
    let acumulador = 0
    numeros.forEach(n => acumulador += n) // para cada numero em numeros, adicione esse numero em acumulador
    return acumulador
}

console.log(total(1,2,3,4,5,6,7,8,9));