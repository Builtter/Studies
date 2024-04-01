class Conta:
    def __init__(self, numero, saldo):
        self.__numero = numero
        self.__saldo = saldo


    def main():
        conta = Conta(1, 1000)
    
    
    saldo = conta._Conta__saldo

    if __name__ == "__main__":
        main()