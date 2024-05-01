getOption(notAvailable, repeat) {
    this.menu.getOption(notAvailable, repeat, (option) => {
        this.switchOption(option);
    });
}

switchOption(option) {
    switch (option) {
        case "0":
            this.signIn();
            break;

        case "1":
            this.signUp();
            break;

        case "2":
            this.logout();
            break;

        default:
            this.menu.getOption(true);
            break;
    }
};

signIn() {
    console.log("Sign-in\n");
    let credentials = { emailUsername: "", password: "" };

    this.readLine.question(`E-mail or Username: `, (emailUsername) => {
        credentials.emailUsername = emailUsername;

        this.readLine.question(`Password: `, (password) => {
            credentials.password = password;
            this.verifyCredentials(credentials);
        });
        this.readLine.close();
    });
}

signUp() {
    console.log("Sign-up");
    let username, email, password;

    this.readLine.question(`E-mail: `, (readEmail) => {
        email = readEmail;

        this.readLine.question(`Username: `, (readUsername) => {
            username = readUsername;

            this.readLine.question(`Password: `, (readPassword) => {
                password = readPassword;

                const newUser = new User(username, email, password);
                const existingUsers = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
                existingUsers.push(newUser);
                fs.writeFileSync(usersFilePath, JSON.stringify(existingUsers, null, 2), "utf-8");

                this.setSession(newUser);
                console.log(`User ${newUser.username} created successfully.`);
            });
        });
    });
}

logout() {
    console.log("Log-out");
    this.session = {};
}

verifyCredentials(credentials) {
    if (credentials != null) {
        const user = users.find(
            (u) => u.email === credentials.emailUsername || u.username === credentials.emailUsername
        );

        if (user && user.password === credentials.password) {
            this.setSession(user);
            console.log(`You are in, ${this.session.username}.`);
        } else {
            console.log("Invalid credentials. Please try again.");
            return false;
        }
    }
}