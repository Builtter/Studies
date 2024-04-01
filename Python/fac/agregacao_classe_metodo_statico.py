class Pessoa:
    _contador = 0

    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

        Pessoa._contador += 1

    def imprimir(self):
        print(self.nome, ' tem '),
        self.idade, 'ano(s)'

    @property
    def contador(self):
        return type(self)._contador


class NomeCompleto:
    def __init__(self, nome, sobrenome):
        self.nome = nome
        self.sobrenome = sobrenome

    @classmethod
    def fromString(cls, texto):
        nome, sobrenome = map(str, texto.split(' '))
        objeto = cls(nome, sobrenome)
        return objeto


registro1 = NomeCompleto.fromString("Maria Carmo")
print(registro1)

p1 = Pessoa('Cala', 18)
p2 = Pessoa('Jão', 15)
p3 = Pessoa('Bia', 2)
print(p1.contador)
print(Pessoa._contador)
