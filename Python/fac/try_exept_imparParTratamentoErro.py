try:
    num = int(input('Digite um valor: '))

    msgPar = 'Numero par'
    msgImpar = 'Numero Impar'

    if num % 2 == 0:
        print(msgPar)
    else:
        print(msgImpar)

except ValueError:
    print('Entre com um número inteiro válido')
