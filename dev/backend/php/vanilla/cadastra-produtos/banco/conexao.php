<?php
    // Realiza a conexão
    $conn = mysqli_connect("localhost", "root", "", "produtos");
    
    // Verifica a conexão
    if (!$conn) {
        die("A conexão falhou: " . mysqli_connect_error());
    }
    echo "Conexão bem sucedida";
?>