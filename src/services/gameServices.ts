import db from '../db/database'
import { getUserByUsername } from './userServices'

export type Game = {
    id: number
    name: string
    genre: string
    price: number
    description: string
    cover_image: string
}

export function getAllGames() {
    return db.prepare(`SELECT * FROM games`).all()
}

export function getGameById(id: number): Game | undefined {
    return db.prepare('SELECT * FROM games WHERE id = ?').get(id) as
        | Game
        | undefined
}

export function getGamesByUser(username: string): Game[] {
    return db
        .prepare(
            `
            SELECT g.*
            FROM games g
            JOIN user_games ug ON g.id = ug.game_id
            JOIN users u ON u.id = ug.user_id
            WHERE u.username = ?
        `
        )
        .all(username) as Game[]
}

export function addGameToUser(username: string, gameId: number) {
    const user = getUserByUsername(username)

    if (!user) throw new Error('Usuário não encontrado')

    return db
        .prepare(
            `
            INSERT OR IGNORE INTO user_games (user_id, game_id)
            VALUES (?, ?)
        `
        )
        .run(user.id, gameId)
}

export function removeGameFromUser(username: string, gameId: number) {
    const user = getUserByUsername(username)

    if (!user) throw new Error('Usuário não encontrado')

    return db
        .prepare(
            `
            DELETE FROM user_games
            WHERE user_id = ? AND game_id = ?
        `
        )
        .run(user.id, gameId)
}
