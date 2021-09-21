const express = require('express')
const bodyParser = require('body-parser')
const rotas = require('./rotas')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send("Rodando")
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(rotas)


app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})