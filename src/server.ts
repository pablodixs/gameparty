import session from 'express-session'
import express, { Request, Response } from 'express'
import mustacheExpress from 'mustache-express'
import path from 'path'

import highlightedGames from './utils/mock.json'
import { createUser, findUser, User } from './services/userServices'
import { authMiddleware } from './middlewares/authMiddleware'

declare module 'express-session' {
    interface SessionData {
        user?: {
            username: string
            password: string
        }
    }
}

const app = express()
const PORT = 3333

app.use(
    session({
        secret: 'AAAAAAAAAAABBBBBBBBBCCCCCCCCCCCCCC',
        resave: false,
        saveUninitialized: false,
    })
)

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '../views'))
app.set('view cache', false)

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.render('index', {
        user: req.session.user,
    })
})

app.get('/auth', (req: Request, res: Response) => {
    res.render('auth')
})

app.get('/auth/cadastro', (req: Request, res: Response) => {
    res.render('cadastro')
})

app.get('/conta/biblioteca', authMiddleware, (req: Request, res: Response) => {
    console.log(req.session.user)
    res.render('biblioteca', {
        user: req.session.user,
    })
})

app.get('/conta', authMiddleware, (req: Request, res: Response) => {
    res.render('conta', {
        user: req.session.user,
    })
})

// Autenticação
app.post('/auth/login', (req: Request, res: Response) => {
    const { username, password } = req.body

    const user = findUser(username, password) as {
        username: string
        password: string
    }

    if (user) {
        req.session.user = user

        res.redirect('/conta/biblioteca')

        if (req.session.user.password !== user.password) {
            res.render('auth', {
                error: 'Senha incorreta',
            })
        }
    } else {
        res.render('auth', {
            error: 'Usuário não encontrado',
        })
    }
})

app.post('/auth/cadastro', (req: Request, res: Response) => {
    const { name, username, password } = req.body

    const user = findUser(username, password) as {
        username: string
        password: string
    }

    if (user) {
        res.render('cadastro', {
            error: 'Esse usuário já existe',
        })
    } else {
        createUser(name, username, password)
        res.redirect('/conta')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
