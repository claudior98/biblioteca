const Usuario = require('../models/usuario')
const express = require('express')

class UsuarioController{
    createUser = async (req, res) => {
        const { email  } = req.body
        try {
            if(await Usuario.findOne({email})){
                return res.status(400).json({message: "Usuario ja cadastrado"})
            }
            const user = await Usuario.create(req.body)
            user.senha = undefined
            return res.json(user)
        }catch(error){
            console.log(error)
            res.status(500).json(error)
        }
    }
    listUser = async (req, res) => {
        try{    
            const list = await Usuario.find(req.body)
            return res.json(list)
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao listar usuario"})
        }
    }
    editUser = async (req, res) => {  
        const { _id } = req.params
        try{   
            if(!await Usuario.findById({_id})){
                return res.status(400).json({message: "Usuario nao cadastrado"})
            } 
            const list = await Usuario.updateOne({_id}, req.body)
            return res.json(list)
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao editar usuario"})
        }
    }
    removeUser = async (req, res) =>{
        const { _id } = req.params
        try{   
            if(!await Usuario.findById({_id})){
                return res.status(400).json({message: "Usuario nao cadastrado"})
            } 
            const list = await Usuario.deleteOne({_id})
            return res.json()
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao deletar usuario"})
        } 
    }
}

module.exports = new UsuarioController()