<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP E-mail App | E-mails</title>
</head>
<body>
    <h1>List of E-mails</h1>

    <?php
    require_once 'db.php';
    $database = new Database();
    $db = $database->getDb();

    $result = $db->query('SELECT * FROM emails');
    $emails = $result->fetchArray(SQLITE3_ASSOC);

    if ($emails) {
        echo '<ul>';
        foreach ($emails as $email) {
            echo '<li>' . $email['name'] . ' - ' . $email['email'] . '</li>';
        }
        echo '</ul>';
    } else {
        echo '<p>No emails found.</p>';
    }
    ?>
</body>
</html>
