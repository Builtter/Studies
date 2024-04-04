from time import sleep
from threading import Thread

def tarefa(tempo_espera, mensagem):
    print(f'\n iniciando tarefa {mensagem}')
    sleep(tempo_espera)
    print(f'finalizando tarefa {mensagem}')

thread1 = Thread(target=tarefa, args=(3,'|THREAD1 em execução|'))
thread1.start()

print(f'\n aguardando execução')

thread1.join()

thread2 = Thread(target=tarefa, args=(2,'|THREAD2 em execução|'))
thread2.start()

thread2.join()

print('Execução concluida')

