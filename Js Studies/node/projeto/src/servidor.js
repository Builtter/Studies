const porta = 1253;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.get('/produtos', (req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // retorna JSON
})

app.put('/produtos', (req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // retorna JSON
})

app.delete('/produtos', (req,res,next)=>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) // retorna JSON
})

app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}`);
});
