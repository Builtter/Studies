const tecnologias = new Map();

tecnologias.set('react', {frameworck: false})
tecnologias.set('angular',{frameworck: true})

console.log(tecnologias.react);
console.log(tecnologias.get('react'));
console.log(tecnologias.get('react').frameworck);


const chavesVariadas = new Map([
[function(){}, 'função'],
[{}, 'objeto'],
[123, 'numeros']
]) 

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);


chavesVariadas.set(123,'A')
chavesVariadas.set(123,'B')// prvalecerá

console.log(chavesVariadas);