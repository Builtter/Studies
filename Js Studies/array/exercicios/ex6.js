const inverso = valor => {
    const tipo = typeof valor;

    if (tipo == "boolean"){ 
        return !valor
    }
    else if (tipo == "number") {
        return -valor
    }else
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso('a'));
console.log(inverso(1));
console.log(inverso(-30));
console.log(inverso(true));
console.log(inverso(false));
