function logThis(){
    console.log('Dentro da função o this se comporta diferente');
    console.log(this === exports); //false
    console.log(this===module.exports); //false

    console.log(this===global); //True → Está dentro de função

    this.perigo = 'Estou no escopo global';
    console.log(global);
}
logThis();

console.log('================Arrow Function=================');

arrowFunctionThis = () => {
    console.log('Dentro da Arrow Function o this se comporta diferente');
    console.log(this === exports); //true
    console.log(this===module.exports); //true

    console.log(this===global); //false → Está dentro de função

    module.exports.perigo = 'Estou no escopo module.exports';
    console.log(module.exports);
}

arrowFunctionThis();