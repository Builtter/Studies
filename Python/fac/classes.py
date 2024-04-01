import self
class Pessoa:
    def __init__(self, nome, ender):
        self.set_nome(nome)
        self.set_ender(ender)

    def set_nome(self, nome):
        self.nome = nome

    def set_ender(self, ender):
        self.ender = ender

    def get_nome(self):
        return self.nome

    def get_ender(self):
        return self.ender

pessoa1 = Pessoa('Maria','rua longitudinal')
pessoa2 = Pessoa('Mirna','rua L Qd. 12')

print(f'nome: {pessoa1.get_nome()}, endereço: {pessoa1.get_ender()}')
print(f'nome: {pessoa2.get_nome()}, endereço: {pessoa2.get_ender()}')