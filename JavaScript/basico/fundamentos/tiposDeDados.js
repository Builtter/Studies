console.log("---------------- Números --------------");
const peso1 = 1.0;
const peso2 = Number('2.0');
const float = 1.5135;


console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
console.log(Number.isInteger(float));

console.log(peso1, peso2, float);

const n1 = 9.871;
const n2 = 6.871;

const total = n1 * peso1 + n2 * peso2;
const media = total / (peso1 + peso2);

console.log("---------------- Media --------------");
console.log(media);
console.log(media.toFixed(2)); //Aplica máscara retornando o resultado com apenas duas casas decimais após a vírgula 
console.log(media.toString()); //Retorna valor literal como string
console.log(media.toString(2)); // Transforma o número para forma binária 
console.log("---------------- Cuidados --------------");

console.log(7 / 0); //Infinity
console.log("10" / 2); // Por mais que seja uma string, o JS entende que seu valor pode ser dividido 
console.log("3" - 2); // Realiza a operação pois a fz sentido
console.log("3" + 2); // Realiza a concatenação pois fz sentido no contexto de string
console.log("10,2" / 2); // Por mais que seja uma string composta por um numero com virgula, o JS não entende que se trata de um numero, com ponto sim
console.log("Pimba" * 2); // NaN (Not a Number) JS não realiza a operação por não se tratar de um númmero 
console.log(0.1 + 0.7); // Baixa precisão
// console.log(10.toString()); → Invalid or unexpected token
console.log((10.345).toString());


console.log("---------------- Math --------------");

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area.toFixed(2) + " m2");

console.log("---------------- Strings --------------");

const duvida = "Pergunta→";

console.log(duvida.charAt(4)); // Retorna o valor da posição informada, contágem inicia do zero como Python
console.log(duvida.charAt(9)); // Por mais que não exista valor na posição, um erro não e gerado
console.log(duvida.charCodeAt(8)) // Passada uma cordenada e retorna com base no valor, o código que representa o valor encontrado com base na tabela unicode
console.log(duvida.indexOf("→")); // Retorna a posição do valor caso ele exista
console.log(duvida.substring(1)); // Captura do indicie informado até o final
console.log(duvida.substring(3, 9)); // Captura do indicie informado como inicio até o final antes do indicie final informado

console.log("Minha ".concat(duvida).concat(" Fon?"));

console.log(duvida.replace(1, 'F')); // Não foi


console.log("Diego, Totoro, Tião, Marcos".split(',')); // Separa com base no sinal ou valor informado e transforma o resultado em um array conforme o delimitados





