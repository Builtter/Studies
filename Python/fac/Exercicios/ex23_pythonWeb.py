from flask import Flask

app = Flask(__name__)


@app.route('/')
def comprimento():
    msg_ola = '<h1>Koé felas</h1>'
    instr = '<p>digite dois numeros</p>'
    return msg_ola + instr


@app.route('/somar/')
@app.route('/user/<n1>/<n2>')
def soma(n1=0, n2=0):
    result = float(n1) + float(n2)
    return str(result)


if __name__ == "__main__":
    app.run(debug=True)
