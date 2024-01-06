<?php
    // Realiza a conexão
    $conn = mysqli_connect("localhost", "root", "", "WeFit");
    
    // Verifica a conexão
    if (!$conn) {
        die("A conexão falhou: " . mysqli_connect_error());
    }
    echo "Conexão bem sucedida";
?>