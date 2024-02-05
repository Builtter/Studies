function inverteChaveValor(arr) {
    var objinvertido = {}

    Object.entries(arr).forEach( chaveValor => {
        const chave = 0,
                valor = 1
        objinvertido[chaveValor[valor]] = chaveValor[chave]
    })
    console.log(objinvertido);
}

var objetoTeste = { a: 1, b: 2, c: 3 };

inverteChaveValor(objetoTeste)

//modo 2

function inverteChaveValor2(arr) {
    const chaveValorInvertido = Object.entries(arr)
    .map( parChaveValor => parChaveValor.reverse())
    console.log(Object.fromEntries(chaveValorInvertido));

}
