const rotas = require('express').Router()
const LivrosController = require('./controllers/livros')
const UsuarioController = require('./controllers/usuarios')

rotas.get('/listBook', LivrosController.listBook) 
rotas.post('/addBook',LivrosController.createBook)
rotas.delete('/removeBook/:_id',LivrosController.removeBook)
rotas.put('/updateBook/:_id', LivrosController.updateBook)

rotas.post('/addUser',UsuarioController.createUser)
rotas.get('/listUser', UsuarioController.listUser) 
rotas.delete('/removeUser/:_id',UsuarioController.removeUser)
rotas.put('/editUser/:_id', UsuarioController.editUser)


module.exports = rotas