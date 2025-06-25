import db from './../db/database'

export type User = {
    username: string
    password: string
}

export function getAllGames() {
    return db.prepare(`SELECT * FROM games`).all()
}

// export function createUser(name: string, username: string, password: string) {
//     return db
//         .prepare(
//             `INSERT INTO users (name, username, password) VALUES (?, ?, ?)`
//         )
//         .run(name, username, password)
// }
