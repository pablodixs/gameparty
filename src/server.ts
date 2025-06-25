import express, { Request, Response } from 'express'
import mustacheExpress from 'mustache-express'
import path from 'path'

import highlightedGames from './utils/mock.json'

const app = express()
const PORT = 3333

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '../views'))
app.set('view cache', false)

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    console.log(highlightedGames)
    res.render('index')
})

app.get('/auth', (req: Request, res: Response) => {
    console.log(highlightedGames)
    res.render('auth')
})

app.get('/auth/cadastro', (req: Request, res: Response) => {
    console.log(highlightedGames)
    res.render('cadastro')
})

app.get('/conta/biblioteca', (req: Request, res: Response) => {
    console.log(highlightedGames)
    res.render('biblioteca')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
