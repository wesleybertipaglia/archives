menu = new Menu(["List Wishes", "New Wish", "Delete Wish", "Update Wish"]);

function getOption(notAvailable, repeat) {
    menu.getOption(notAvailable, repeat, (option) => {
        switchOption(option);
    });
}

function switchOption(option) {
    switch (option) {
        case "0":
            readWishes();
            break;

        case "1":
            createWish();
            break;

        case "2":
            deleteWish();
            break;

        case "3":
            updateWish();
            break;

        default:
            menu.getOption(true);
            break;
    }
};

function readWishes() {
    const wishes = JSON.parse(fs.readFileSync(wishesFilePath, "utf-8"));
    wishes.filter(item => item.userId == )
}

function createWish() {
    console.log("New Wish");
    let title, description;

    this.readLine.question(`Title: `, (readTitle) => {
        title = readTitle;

        this.readLine.question(`Description: `, (readDescription) => {
            description = readDescription;

            const newWish = new Wish(this.id, title, description);
            const existingWishes = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")) || [];
            existingWishes.push(newWish);
            fs.writeFileSync(wishesFilePath, JSON.stringify(existingWishes, null, 2), "utf-8");

            console.log(`User ${newWish.title} created successfully.`);
            return newWish;
        });
    });
}

function deleteWish() { }

function updateWish() { }