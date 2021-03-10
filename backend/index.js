require('dotenv/config')
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/audios", express.static("./assets"))

const rotas = require('./models/rotas')

const port = process.env.API_PORT || 3333

app.use(rotas);

app.listen(port, () => {
    console.log('Servidor rodando na url localhost:' + port)
})