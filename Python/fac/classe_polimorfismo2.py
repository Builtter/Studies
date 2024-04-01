class Veiculo():
    def rodar(self):
        print('Reduz consumo de combustivel')


class VeiculoEletrico(Veiculo):
    def rodar(self):
        super().rodar()
        print('Utiliza eletricidade como combustivel')


veiculo_eletrico = VeiculoEletrico()
veiculo_eletrico.rodar()
