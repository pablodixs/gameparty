import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.resolve(__dirname, '../db/app.db')
const db = new Database(dbPath)

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
`)

export default db
