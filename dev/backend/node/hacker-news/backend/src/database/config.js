const path = require('path');

module.exports = {
    username: 'root',
    password: null,
    database: 'hackgpt_dev',
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.resolve('src', 'database', 'database.sqlite'),
}