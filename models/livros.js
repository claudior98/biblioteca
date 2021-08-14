const mongo = require('../database')

const LivrosSchema = new mongo.Schema({
    titulo: {
        type: String,
        require : true,
        unique : true,
    },
    editora: {
        type: String , 
        require : true
    },
    //imagem: {binData: Buffer}, adicionar imagem em criacao
    autores: {
        type: String, 
        require: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
}) 

const Livro = mongo.model('Livro', LivrosSchema )

module.exports = Livro  