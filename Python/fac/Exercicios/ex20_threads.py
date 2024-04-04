from time import sleep
from threading import Thread

def calcular_cubo(num, tempo_espera):
    print(f'\nCubo: {num * num * num}')
    sleep(tempo_espera)
    print('conclusão func cubo')

def calcular_quadrado(num, tempo_espera):
    print(f'\nQuadrado: {num * num}')
    sleep(tempo_espera)
    print('conclusão func quadrado')

thread1 = Thread(target=calcular_cubo, args=(5, 3))
thread2 = Thread(target=calcular_quadrado, args=(5, 2))

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print('Execução concluida')