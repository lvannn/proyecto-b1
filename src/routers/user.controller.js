'use stict'
const express = require ('express')
const {Router} = require ('express')
const {createUser, listUser, updateUser, deleteUser, login} = require('../controllers/user.controller')
const api = Router()

api.post('/create-user', createUser)
api.get('/list',listUser)
api.put('/edit-user/:id', updateUser)
api.delete('/delete-user/:id', deleteUser)
api.post('/login',login)

module.exports = api
    