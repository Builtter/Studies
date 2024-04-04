from flask import Flask

app = Flask(__name__)

@app.route('/ola', methods=['POST'])
def ola_post():
    return "Olá, GET"

@app.route('/ola')
def ola_get(nome="mundo"):
    return "Olá, POST"

if __name__ == '__main__':
    app.run()