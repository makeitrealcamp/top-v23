const express = require('express')

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

const app = express()

// obtener el body del request y agregarlo al req.body
app.use(express.json())

// routas
app.get('/', (req, res) => {
  res.send('<h1>Hola mundo TOP v23</h1>')
})

// API RESTful
// api/notes/ -> GET -> OBTIENE TODAS LAS NOTAS. TODO LOS RECURSOS
// api/notes/:id -> GET -> OBTIENE UNA NOTA. RECURSO ESPECIFICO
// api/notes/ -> POST -> CREA UNA NOTA. RECURSO NUEVO
// api/notes/:id -> PUT -> ACTUALIZA UNA NOTA. RECURSO EXISTENTE
// api/notes/:id -> PATCH -> ACTUALIZA UNA NOTA. RECURSO EXISTENTE
// api/notes/:id -> DELETE -> ELIMINA UNA NOTA. RECURSO EXISTENTE
app.get('/api/notes', (req, res) => {
  res.json(notes)
})
app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params

  const note = notes.find((note) => note.id === Number(id))

  if (!note) {
    res.status(404).json({ error: `Note with id ${id} not found` })
  } else {
    res.json(note)
  }
})
app.post('/api/notes', (req, res) => {
  const data = req.body

  const note = {
    ...data,
    id: notes.length + 1,
  }

  notes.push(note)

  res.status(201).json(note)
})


const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

