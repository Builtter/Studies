def divisao(numA, numB):
    try:
        resultado = numA / numB
        print(f"Resposta: {resultado}")

    except ZeroDivisionError:
        print('não é possível realizar divisão por zero')

divisao(3, 0)
