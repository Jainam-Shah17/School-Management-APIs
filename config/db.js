const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const connectDB = async () => {
    try{
        const connection = await pool.promise().getConnection();
        console.log("Database is Conneted");
        connection.release();
    }
    catch(err){
        console.error("Error connecting to database");
        process.exit(1);
    }
}

module.exports = { pool: pool.promise(), connectDB };