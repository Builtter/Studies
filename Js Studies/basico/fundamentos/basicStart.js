console.log("---------------- Area --------------");

// PI * raio * raio

const pi = 3.141592;
var raio = 10;
var area = pi * raio ** 2; //potência em js utiliza-se **

console.log("A área com base no raio de " + raio + " m é de " + area + "m²");


console.log("---------------- Tipos de dados --------------");

var idade;
console.log(idade);
// variaveis não declaradas com valores possuem resultado undefined 

var idade = 3;
console.log(idade);

var recipiente = "Caixa";
var item = "Sapato";

console.log(recipiente + item);
//Para strings, ao concatenar, é adicionado uma ao lado da outra

console.log(recipiente + " " + item);

//Tipos de dados
//typeof retorna o tipo da variavel

// Numero
var idade = 31;
console.log(typeof idade);

// Numero com ponto flutuante 
var salario = 4380.8;
console.log(typeof salario);


// Boolean true ou false
var estaCheio = true;
console.log(estaCheio);
console.log(typeof estaCheio);

// String - sequência de caracteres (letras+numeros+simbolos)
var souString = "Hoje tenho → R$10,00";
console.log(typeof "souString");
console.log(typeof souString);

//Variáveis constantes

const bola = "Redonda";
// bola = "Quadrada"; → TypeError: Assignment to constant variable ou atribuição a variável constante
console.log(bola);

console.log("---------------- SWUAP --------------");

console.log("---------------- Antes --------------");
var a = 7;
var b = 94;

console.log("Variavel A: " + a);
console.log("Variavel B: " + b);

console.log("---------------- Depois --------------");
var sup = b;
var b = a;

var a = sup;

console.log("Variavel A: " + a);
console.log("Variavel B: " + b);


// ou 
console.log("---------------- Ou [] --------------");

var c = 7;
var d = 94;

[c, d] = [d, c]

console.log("Variavel C: " + c);
console.log("Variavel D: " + d);



console.log("---------------- VARIAVEIS --------------");


var ah = 30;
let be = 50;

console.log(ah, be);

ah = 40;
be = 70;

console.log(ah, be);

const ce = 100;

console.log(ce);

// ce = 1000; → Assignment to constant variable || Atribuição a variável constante

console.log(ce);
