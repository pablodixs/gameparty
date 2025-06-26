import session from 'express-session'
import express, { Request, Response } from 'express'
import mustacheExpress from 'mustache-express'
import path from 'path'

import {
    createUser,
    findUser,
    getUserByUsername,
    User,
} from './services/userServices'
import { authMiddleware } from './middlewares/authMiddleware'
import {
    getAllGames,
    getGamesByUser,
    getGameById,
    addGameToUser,
    removeGameFromUser,
    rateGame,
    getUserRating,
    getGameRatings,
} from './services/gameServices'

declare module 'express-session' {
    interface SessionData {
        user?: {
            username: string
            password: string
        }
    }
}

const app = express()
const PORT = 3000

app.use(
    session({
        secret: 'AAAAAAAAAAABBBBBBBBBCCCCCCCCCCCCCC',
        resave: false,
        saveUninitialized: false,
    })
)

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '../views'))
app.set('view cache', false)

app.get('/', (req: Request, res: Response) => {
    const games = getAllGames()

    if (!req.session.user) {
        return res.render('index', {
            user: undefined,
            games,
        })
    }
    res.render('index', {
        user: req.session.user,
        games,
    })
})

app.get('/auth', (req: Request, res: Response) => {
    if (req.session.user) {
        return res.redirect('/')
    }

    res.render('auth')
})

app.get('/auth/cadastro', (req: Request, res: Response) => {
    if (req.session.user) {
        return res.redirect('/')
    }

    res.render('cadastro')
})

app.get('/conta/biblioteca', authMiddleware, (req: Request, res: Response) => {
    if (!req.session.user) {
        return res.redirect('/')
    }

    const games = getGamesByUser(req.session.user.username)

    res.render('biblioteca', {
        user: req.session.user,
        games,
    })
})

app.get('/conta/avaliacoes', authMiddleware, (req: Request, res: Response) => {
    if (!req.session.user) {
        return res.redirect('/')
    }

    const games = getGamesByUser(req.session.user.username)

    res.render('avaliacoes', {
        user: req.session.user,
        games,
    })
})

app.get('/conta', authMiddleware, (req: Request, res: Response) => {
    res.render('conta', {
        user: req.session.user,
    })
})

// Games

app.get('/buy/:id', authMiddleware, (req: Request, res: Response) => {
    const gameId = Number(req.params.id)
    const username = req.session.user?.username

    const game = getGameById(gameId)

    if (!game) {
        res.status(404).send('Jogo não encontrado')
        return
    }

    if (!username) {
        res.status(403).send('Usuário não autenticado')
        return
    }

    addGameToUser(username, gameId)

    res.render('compra', {
        user: req.session.user,
        game,
    })
})

app.delete(
    '/games/remove/:id',
    authMiddleware,
    (req: Request, res: Response) => {
        const gameId = Number(req.params.id)
        const username = req.session.user?.username

        if (!username) {
            res.status(403).json({ error: 'Usuário não autenticado' })
            return
        }

        try {
            removeGameFromUser(username, gameId)
            res.status(200).json({ message: 'Jogo removido com sucesso' })
        } catch (error) {
            res.status(500).json({ error: 'Erro ao remover jogo' })
        }
    }
)

app.post('/games/:id/rating', authMiddleware, (req: Request, res: Response) => {
    const gameId = Number(req.params.id)

    // Verifica se req.body existe e tem os campos necessários
    if (!req.body || typeof req.body !== 'object') {
        res.status(400).json({ error: 'Dados inválidos enviados' })
        return
    }

    const { rating, comment } = req.body
    const username = req.session.user?.username

    if (!username) {
        res.status(403).json({ error: 'Usuário não autenticado' })
        return
    }

    if (!rating || rating < 1 || rating > 5) {
        res.status(400).json({ error: 'Avaliação deve estar entre 1 e 5' })
        return
    }

    try {
        rateGame(username, gameId, rating, comment)
        res.status(200).json({ message: 'Avaliação enviada com sucesso' })
    } catch (error) {
        console.error('Erro ao salvar avaliação:', error)
        res.status(500).json({
            error:
                error instanceof Error
                    ? error.message
                    : 'Erro interno do servidor',
        })
    }
})

app.get('/games/:id/ratings', (req: Request, res: Response) => {
    const gameId = Number(req.params.id)

    try {
        const ratings = getGameRatings(gameId)
        res.json(ratings)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter avaliações do jogo' })
    }
})

app.get(
    '/games/:id/my-rating',
    authMiddleware,
    (req: Request, res: Response) => {
        const gameId = Number(req.params.id)
        const username = req.session.user?.username

        if (!username) {
            res.status(403).json({ error: 'Usuário não autenticado' })
            return
        }

        try {
            const rating = getUserRating(username, gameId)
            res.json(rating)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter sua avaliação' })
        }
    }
)

// Autenticação
app.post('/auth/login', (req: Request, res: Response) => {
    const { username, password } = req.body

    const user = findUser(username, password) as {
        username: string
        password: string
    }

    if (user) {
        req.session.user = user

        res.redirect('/')

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
        res.redirect('/')
    }
})

app.get('/auth/logout', (req: Request, res: Response) => {
    req.session.user = undefined
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
