import express from 'express'

/*
  get => Listar
  post => Criar
  put => Editar varios
  patch => Editar um
  delete => Deletar
*/

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

  users.push(req.body)

  res.status(201).json(req.body)
})


app.get('/usuarios', (req, res) => {
  res.status(200).json(users)
})

/*
  1) Tipo de rota / Método HTTP
  2) Endereço
*/

app.listen(3000)