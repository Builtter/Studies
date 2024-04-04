from time import sleep
from threading import Thread

def tarefa(tempo_espera, mensagem):
    print(f'\n iniciando tarefa {mensagem}')
    sleep(tempo_espera)
    print(f'finalizando tarefa {mensagem}')

thread = Thread(target=tarefa, args=(5,'|thread em execução|'))
thread.start()

print(f'\n aguardando execução')

thread.join()

print('Execução concluida')

