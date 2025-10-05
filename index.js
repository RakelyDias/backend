const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("<h1>Olá, Mundo!</h1>")
})

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333!")
})