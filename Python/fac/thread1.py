import threading
import time


def funcao():
    for i in range(3):
        print(i, ' executandi thread')
        time.sleep(1)

print('iniciando')
threading.Thread(target=funcao).start()