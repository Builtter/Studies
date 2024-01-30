//não ceita repetição/não indexada
const times = new Set()
times.add('vasco')
times.add('são paulo').add('flamengo').add('palmeiras').add('corinthians')
times.add('vasco')

console.log(times);
console.log(times.size);//5
console.log(times.has('vasco'));//true
console.log(times.has('Vasco'));//false
times.delete('flamengo')
console.log(times.has('flamengo'));//false
console.log(times);

const nomes = ['raquel', 'marcos','eduardo','marcos']//marcos repete e não será incrementado com set
const setNomes = new Set(nomes)
console.log(setNomes);