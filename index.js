//Declaracion de constantes
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')
const { request } = require('express')
require('dotenv').config

const app = express()

//Capturar el body
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//Conexion a BD

//Importar Rutas

//Ruta
app.get('/', (req, res) =>{
    res.json({
        estado: true,
        mensaje: '¡Works Fine!'
    })
})

//Inicializar Serv
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Servidor Running: ${PORT}`)
})