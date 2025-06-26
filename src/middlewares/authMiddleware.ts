import { NextFunction, Request, Response } from 'express'

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.session.user) {
        next()
    } else {
        // Verifica se é uma requisição de API (contém /games/ ou /api/)
        if (req.path.includes('/games/') || req.path.includes('/api/')) {
            res.status(401).json({ error: 'Usuário não autenticado' })
        } else {
            res.render('auth', {
                error: 'Você precisa estar autenticado para acessar esta página.',
            })
        }
    }
}
