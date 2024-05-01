const path = require('path');

module.exports = {
    username: "root",
    password: "root",
    database: "sharednotes",
    host: "localhost",
    dialect: "sqlite",
    storage: path.resolve('database', 'sharednotes.sqlite')
};