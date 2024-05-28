//object.entries → retorna chave e valor de um objeto em uma matriz
//object.values → valores de um objeto
//object.keys → Retorna todas chaves de um objeto {}


const obj = {a:1,b:2,c:3,d:4,e:5}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//melhorias em notações literal

const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return 'oi galero'
    }
}

console.log(pessoa.nome, pessoa.ola());

// class
class Animal{
    habitat(){
        return 'natural' 
    }
}
class Cachorro extends Animal {
    falar(){
        return 'bark bark au au'
    }
}

console.log(new Cachorro().falar());
console.log(new Cachorro().habitat());