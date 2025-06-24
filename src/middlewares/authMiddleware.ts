import { NextFunction, Request, Response } from 'express'

declare module 'express-session' {
    interface SessionData {
        user?: any
    }
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login')
    }
}
