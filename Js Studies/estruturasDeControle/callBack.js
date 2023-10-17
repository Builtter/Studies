console.log('------ CallBack #1 --------')

const fabricantes = ["Mercedes", "Audi", "BMW", "Honda", "Citroen"];// Indicies de array iniciam-se em 0

function imprimir(nome, indicie) {
    console.log(`${indicie + 1}. ${nome}`)
}
console.log('------ Forma 1 --------')
fabricantes.forEach(imprimir); //Para cada item em fabricante, chame a função imprimir

console.log('------ Forma 2 --------')
fabricantes.forEach(function (a) {
    console.log(a)
})

console.log('------ Forma 3 --------')
fabricantes.forEach(fabricantes => console.log(fabricantes))//função que percorre todos os itens do array e imprime cada

console.log('------ CallBack #2 --------')

const notas = [7.7, 6.5, 8.9, 0.9, 5.55, 3.2, 10, 2.0]

//Sem CallBack
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com CallBack
const notasBaixas2 = notas.filter(function (notas) { // filter se trata de uma função callBack que recebe true ou falso, vaso verdadeiro, incrementa em notasBaixas
    return notas < 7;
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)

//criando uma funçao para intencificar a elegância do código

const notasMenorQue7 = notas => notas < 7;
const notasBaixas4 = notas.filter(notasMenorQue7);
console.log(notasBaixas4)


// Exemplo de callback em browser 
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('Evento ocorrido!!')
}