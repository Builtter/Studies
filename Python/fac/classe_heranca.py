class ClasseSomaMultiplica:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def soma(self):
        return self.a + self.b

    def multiplicaa(self):
        return self.a * self.b


class Derivada(ClasseSomaMultiplica):
    def subtrair(self):
        return self.a - self.b

    def dividir(self):
        return self.a / self.b


d = Derivada(10, 20)

print(f'Soma de 10 e 20: {d.soma()}')
print(issubclass(Derivada, ClasseSomaMultiplica))
