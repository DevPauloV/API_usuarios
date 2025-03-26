import express from 'express'

/*
  get => Listar
  post => Criar
  put => Editar varios
  patch => Editar um
  delete => Deletar
*/

const app = express()

app.get('/usuarios', (req, res) => {
    res.send('ok, deu bom')
})

/*
  1) Tipo de rota / Método HTTP
  2) Endereço
*/

app.listen(3000)