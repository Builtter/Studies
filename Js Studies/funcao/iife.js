// IIFE → Immediately Invoked Function Expression

(function () { // foge do escopo global
    console.log('Será executado assim que criado!')
    console.log('Foge do escopo mais abrangente!')
})()

//Está contido no 'escopo global'
console.log('Está do escopo global')