const valores = [41, 25.5, 135.5, 15, 2, 5, 4, 8, 1670];
console.log(valores[0], valores[3], valores[8]);
console.log(valores[9])

valores[9] = 70;
console.log(valores[9]);
console.log(valores);

console.log(`O array valores possui  ${valores.length}  elementos!`);
console.log('--------------------------------------------------------------------------');

valores.push({ id: 3 }, false, null, true, 'Testes', ['array', 1, 2, 3, 'fon']);
console.log(valores);
console.log('--------------------------------------------------------------------------');

console.log(valores.pop()); //Saca ou exclui o último elemento do array
delete valores[9]; //Exclui o elemente com base no seu identificador de posição


console.log(valores);
