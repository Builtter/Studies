def tratamentoErroNum(numero):
    while True:
        try:
            num = int(input('Digite um valor: '))
            msg = 'Numero aceito!!'

            print(msg)

            break

        except ValueError:
            print('Entre com um número inteiro válido')

numero = tratamentoErroNum("numero")