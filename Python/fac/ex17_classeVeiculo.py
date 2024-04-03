class Veiculo:
    def __init__(self, nome, velMax, kmLitro):
        self.nome = nome
        self.velMax = velMax
        self.kmLitro = kmLitro

    def capacidadeAcentos(self, capacidade):
        print(f'Capacidade máxima de acentos {self.nome} é {capacidade}')

    def toStr(self):
        print(f'nome: {self.nome}')
        print(f'velocidade máxim: {self.velMax}')
        print(f'Km por Litro: {self.kmLitro}')


class Onibus(Veiculo):
    def capacidadeAcentos(self, capacidade=70):
        return super().capacidadeAcentos(capacidade=70)


onibus_escolar = Onibus('Scania', 100, 9)
onibus_escolar.toStr()
onibus_escolar.capacidadeAcentos()