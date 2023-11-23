const a = 1 
const b = 2 
const c = 3

const obj1 = {a: a, b:b, c:c};
const obj2 = {a,b,c};
console.log(obj1, obj2);

const nomeAttr = 'nota'
const valorAttr = 7.9

const obj3 ={  }
obj3[nomeAttr] = valorAttr

console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);

const obj5 ={
    func: function(){
        //Forma tradicional
    },

    func2(){
        //Forma reduzida também válida
    }
}

console.log(obj5); // funções válidas