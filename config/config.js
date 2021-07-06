const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "development" : {
        "host": process.env.DB_HOST,
        "user": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE
    },
    "production" : {
        "host": process.env.DB_HOST,
        "user": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE
    }
}