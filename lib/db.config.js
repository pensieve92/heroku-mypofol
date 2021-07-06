const mysql = require('mysql2/promise');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

 const getMember = async() => {
    try {        
        const connection = await pool.getConnection(async conn => conn);
        console.log(' ======= Success DB Connect ======= ');
        try {
            const ID = 'member1';
            const [rows] = await connection.query('SELECT * FROM MEMBER WHERE id = ?', [ID]);
            console.log(rows);
            // await connection.commit(); // COMMIT
            connection.release();
            return rows;
        } catch (error) {
            console.log('Query Error');
            // await connection.rollback(); // ROLLBACK
            connection.release();
            return false;
        }          
    } catch (error) {        
        console.log('DB Error');
        return false;
    }
}

module.exports = {
    getMember
}