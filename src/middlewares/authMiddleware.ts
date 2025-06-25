import { NextFunction, Request, Response } from 'express'

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.session.user) {
        next()
    } else {
        res.render('auth', {
            error: 'Você precisa estar autenticado para acessar esta página.',
        })
    }
}
