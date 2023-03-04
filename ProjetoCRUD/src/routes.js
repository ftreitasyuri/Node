const express = require('express')
const router = express.Router()

const CarroController = require('./controllers/CarroController')


// GET
router.get('/carros', CarroController.buscarTodos)

// GET COM 1 CARRO
router.get('/carros/:codigo', CarroController.buscarUm)

// POST inserindo um novo carro
router.post('/carro', CarroController.inserir)

// PUT
router.put('/carro/:codigo', CarroController.alterar)

// PUT
router.delete('/carro/:codigo', CarroController.deletar)

// exportando a rota criada acima
module.exports = router