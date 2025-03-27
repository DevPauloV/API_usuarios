import express from 'express'
import { PrismaClient }  from '@prisma/client'

/*
  get => Listar
  post => Criar
  put => Editar varios
  patch => Editar um
  delete => Deletar
*/

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

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