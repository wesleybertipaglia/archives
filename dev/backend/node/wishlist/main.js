const Auth = require("./model/Auth");
const auth = new Auth();

function main() {
    auth.getOption();

    if (auth.session.id != null) {
        console.log("You are in");
    } else {
        console.log("Try again");
    }
}

main();