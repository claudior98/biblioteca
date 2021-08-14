const mongo = require('../database')
const bcrypt = require('bcrypt')

const usuarioSchema = new mongo.Schema({
     nome : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique : true,
        required: true,
        lowercase: true
    },
    senha: {
        type: String,
        select: false,
    },
    livro: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'Livro',
        require: false,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
})

usuarioSchema.pre('save', async function (next){
    const crypt = await bcrypt.hash(this.senha, 10)
    this.senha = crypt 

    next()
})


const Usuario = mongo.model('Usuario', usuarioSchema)

module.exports = Usuario  