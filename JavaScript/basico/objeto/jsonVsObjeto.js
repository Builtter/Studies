const obj = { a: 1, b: 2, c: 3, soma() { return a + b - c } }
console.log(JSON.stringify(obj)); // Objeto para JSON para texto, não carrega funcionalidades, apenas informações textuais


console.log(JSON.parse('{"a":1, "b":2, "c":3}')); //objeto gerado a partir de um texto, formato válido para JSON
console.log(JSON.parse('{"a":1.8, "b":"sting", "c":{"chave": "valor", "chave2": 2}, "d": []}'));
