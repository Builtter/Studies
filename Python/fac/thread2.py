import threading
import time


def funcao(mensagem):
    for i in range(3):
        print(i, mensagem)
        time.sleep(1)


print('iniciando')
x = threading.Thread(target=funcao, args=('Texto dado como parametro',))
x.start()
