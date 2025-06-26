import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.resolve(__dirname, '../db/app.db')
const db = new Database(dbPath)

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    genre TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    cover_image TEXT
);

CREATE TABLE IF NOT EXISTS user_games (
    user_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);

CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (game_id) REFERENCES games(id),
    UNIQUE(user_id, game_id)
);

INSERT OR IGNORE INTO games (name, genre, price, description, cover_image) VALUES
    ('Rematch', 'Esportes', 89.00, 'Rematch é um jogo de futebol que traz uma experiência realista e emocionante.', 'https://image.api.playstation.com/vulcan/ap/rnd/202503/1816/0544cd1eee552ee2446d10e24c9e6c7d6403e02d404601fc.jpg'),
    ('EA Sports FC 25', 'Esportes', 299.00, 'EA Sports FC 25 é a nova era do futebol digital, trazendo inovação e realismo.', 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/ec3fb7747fd8080ef53d7686e0d98c5abe1f51f1/header.jpg?t=1749120687'),
    ('The Last Of Us™ Parte II Remastered', 'Ação/Aventura', 199.00, 'The Last Of Us™ Parte II Remastered é uma versão aprimorada do aclamado jogo de ação e aventura.', 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1749837923'),
    ('Marvel''s Spider-Man 2', 'Ação/Aventura', 249.00, 'Sejam Melhores. Juntos. O poder incrível do simbionte força Peter Parker e Miles Morales a lutarem desesperadamente para equilibrar suas vidas, amizades e o dever de proteger as pessoas em um capítulo empolgante da aclamada franquia Spider-Man no PC.', 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg?t=1749838789'),
    ('Dead by Daylight', 'Terror', 49.00, 'Dead by Daylight é um jogo de terror assimétrico onde um assassino persegue quatro sobreviventes.', 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/381210/73b856c3c15674f614cf81a6a98aca08412ca944/header_alt_assets_1.jpg?t=1750346018');
`)

export default db
