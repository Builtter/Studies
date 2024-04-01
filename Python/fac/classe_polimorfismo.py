class Argentina():
    def capital(self):
        print('Buenos Aires')

    def lingua_oficial(self):
        print('Espanhol')


class Brasil():
    def capital(self):
        print('Brasilia')
    def lingua_oficial(self):
        print('Português')

obj_argentina = Argentina()
obj_brasil = Brasil()

for pais in (obj_argentina,obj_brasil):
    pais.capital()
    pais.lingua_oficial()