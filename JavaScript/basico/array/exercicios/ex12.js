function removeProp (obj, prop){
    var newObj = obj;

    //Retira propriedade
    delete newObj[prop]

    return newObj;
}

console.log(removeProp({a: 1, b: 2}, "a"));