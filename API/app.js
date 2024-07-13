const express = require('express')

const movies = require('./movies.json')

const app = express()
const port = process.env.PORT ?? 3000
app.disable('x-powered-by')

//root
app.get('/', (req, res) => res.json({message: 'Hello World!'}))


//all movies
app.get('/movies', (req, res)=>{
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id',(req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if(movie) return res.json(movie)

  res.status(404).json({message: 'Movie not found'})
})

app.get('/movies')

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))