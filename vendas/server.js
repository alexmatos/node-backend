const express = require('express')
const app = express()
const port = 3000

// TEMPLATE
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// BANCO DE DADOS
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vendas', {useNewUrlParser: true});

const Produtos = mongoose.model('Produtos', {
    nome: String,
    vlUnit: Number,
    codigoBarras: String
})

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.get('/produtos', (req, res) => {
    let produtos = Produtos.find({}, (err, produtos) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Erro ao consultar produtos.")
        }

        return res.render('produtos', {
            produtos: produtos
        })
    })
    // res.render('produtos', {
    //     title: 'Lista de Produtos'
    // })
})

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}.`))