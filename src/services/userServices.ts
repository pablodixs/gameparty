import db from './../db/database'

export type User = {
    username: string
    password: string
}

export function findUser(username: string, password: string) {
    return db
        .prepare(`SELECT * FROM users WHERE username = ? AND password = ?`)
        .get(username, password)
}

export function createUser(name: string, username: string, password: string) {
    return db
        .prepare(
            `INSERT INTO users (name, username, password) VALUES (?, ?, ?)`
        )
        .run(name, username, password)
}
