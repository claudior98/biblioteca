const Livro = require('../models/livros')
const express = require('express')


class LivrosController {
    
    createBook = async (req, res) => {
        const {titulo} = req.body
        try {
            if (await Livro.findOne({titulo})) {
                return res.status(400).json("Erro livro ja esta cadastrado")
            }
            const livro = await Livro.create(req.body)            
            return res.json(livro)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    listBook = async (req, res) => {
        const livros = await Livro.find(req.body)
        return res.json(livros)
    }
    removeBook = async (req, res) => {
        const {_id} = req.params

        if(!await Livro.findById({_id})) {
            return res.status(400).json("Este livro nao existe")
        }
        const dellLivro = await Livro.deleteOne({_id})
        return res.json({message: "Deletado"})
    }
    updateBook = async (req, res) =>{
        const {_id} = req.params
        if (!await Livro.findById({_id})){
            return res.status(400).json("Este livro nao existe")
        }
        const livroAtt = await Livro.updateOne({_id}, req.body)
        return res.json(livroAtt)
    }
}

module.exports = new LivrosController()