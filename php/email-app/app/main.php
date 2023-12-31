<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $database = new Database();
    $db = $database->getDb();

    $userName = $_POST['userName'];
    $userMail = $_POST['userMail'];

    if (!empty($userName) && !empty($userMail) && filter_var($userMail, FILTER_VALIDATE_EMAIL)) {
        $statement = $db->prepare('INSERT INTO emails (name, email) VALUES (:name, :email)');
        $statement->bindValue(':name', $userName, SQLITE3_TEXT);
        $statement->bindValue(':email', $userMail, SQLITE3_TEXT);
        $statement->execute();

        echo "Email stored successfully!";
    } else {
        echo "Invalid input. Please provide a valid name and email address.";
    }
}
?>
