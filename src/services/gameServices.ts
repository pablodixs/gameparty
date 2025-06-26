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

export function rateGame(
    username: string,
    gameId: number,
    rating: number,
    comment?: string
) {
    const user = getUserByUsername(username)
    if (!user) throw new Error('Usuário não encontrado')

    const userGame = db
        .prepare('SELECT * FROM user_games WHERE user_id = ? AND game_id = ?')
        .get(user.id, gameId)

    if (!userGame) {
        throw new Error('Você precisa possuir o jogo para avaliá-lo')
    }

    return db
        .prepare(
            `
            INSERT OR REPLACE INTO ratings (user_id, game_id, rating, comment)
            VALUES (?, ?, ?, ?)
        `
        )
        .run(user.id, gameId, rating, comment || null)
}

export function getGameRating(gameId: number) {
    return db
        .prepare(
            `
            SELECT 
                AVG(rating) as average_rating,
                COUNT(*) as total_ratings
            FROM ratings 
            WHERE game_id = ?
        `
        )
        .get(gameId)
}

export function getUserRating(username: string, gameId: number) {
    const user = getUserByUsername(username)
    if (!user) return null

    return db
        .prepare(
            `
            SELECT rating, comment, created_at
            FROM ratings 
            WHERE user_id = ? AND game_id = ?
        `
        )
        .get(user.id, gameId)
}

export function getGameRatings(gameId: number) {
    return db
        .prepare(
            `
            SELECT r.rating, r.comment, r.created_at, u.username, u.name
            FROM ratings r
            JOIN users u ON r.user_id = u.id
            WHERE r.game_id = ?
            ORDER BY r.created_at DESC
        `
        )
        .all(gameId)
}
