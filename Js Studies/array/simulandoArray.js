const quaseArray = {0: 'Jão', 1: 'bia', 2:'pablo'};
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString',{
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);
console.log(quaseArray);
console.log(quaseArray.toString());