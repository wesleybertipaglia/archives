const Menu = require("./Menu");
const fs = require("fs");
const User = require("./User");

const usersFilePath = "./data/users.json";
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

class Auth {
    constructor() {
        this.menu = new Menu(["Sign-in", "Sign-up", "Log-out"]);
        this.readLine = require("../helpers/ReadLine");
        this.session = {};
    }

    setSession(user) {
        this.session = { id: user.id, username: user.username };
        return this.session;
    }
}

module.exports = Auth;
