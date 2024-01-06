<?php

$host = "localhost";
$username = "";
$password = "";
$database = "store";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
