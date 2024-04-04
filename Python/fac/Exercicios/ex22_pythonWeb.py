from flask import Flask

app = Flask(__name__)

@app.route('/')
def comprimento():
    msg_ola = '<h1>Koé felas</h1>'
    link = '<p><a href="user/usuario">clique aqui!</a></p>'
    return msg_ola + link

@app.route('/user/')
@app.route('/user/<nome>')
def user(nome = "usuario"):
    msg_ola2 = f'<h1>Koé {nome}</h1>'
    personaliza = f'<h1>altere o nome <em>no endereço browser ↑ </em></h1>'
    return personaliza + msg_ola2

if __name__ == "__main__":
    app.run(debug=True)
