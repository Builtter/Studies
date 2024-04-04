from time import sleep
from threading import Thread

def tarefa(tempo_espera, nome_tarefa):
    print(f'\n iniciando tarefa {nome_tarefa}')
    sleep(tempo_espera)
    print(f'finalizando tarefa {nome_tarefa}')

thread1 = Thread(target=tarefa, args=(3,'|THREAD1|'))
thread2 = Thread(target=tarefa, args=(2,'|THREAD2|'))

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print('Execução concluida')

