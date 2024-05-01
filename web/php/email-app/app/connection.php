<?php
class Database
{
    private $db;
    public function __construct()
    {
        $this->db = new SQLite3('emails.db');
        $this->db->exec('
            CREATE TABLE IF NOT EXISTS emails (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL
            )
        ');
    }
    public function getDb()
    {
        return $this->db;
    }
}
?>
