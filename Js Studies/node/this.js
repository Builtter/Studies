console.log(this===global); //False → Está dentro de modulo
console.log(this===module); //False

console.log(this===module.exports); //true
console.log(this===exports); //true


function logThis(){
    console.log('Dentro da função o this se comporta diferente');
    console.log(this === exports); //false
    console.log(this===module.exports); //false

    console.log(this===global); //True → Está dentro de função

    this.perigo = 'Estou no escopo global';
    console.log(global);
}

logThis()

this.modulo = 'Estou no module.exports';
console.log(module.exports);