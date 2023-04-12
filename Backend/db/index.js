const {Pool} = require('pg')
require('dotenv').config()

// CREATE Pool Instance
const pool = new Pool ({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT

})
// Exports Modul Query
module.exports = {
    async query(text, params){
        const start = Date.now()
        const result = await pool.query(text, params)
        const duration = Date.now() - start
        console.log(' Hasil Eksekusi Query :', {text, duration, rows: result.rowCount})
        return result  
    }
}