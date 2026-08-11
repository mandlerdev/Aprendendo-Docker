import 'dotenv/config'

export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'usersdb',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}