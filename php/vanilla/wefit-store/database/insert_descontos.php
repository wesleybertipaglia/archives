<?php
    require_once "conexao.php";
    
    // Recebe os dados e atrubui as variáveis
    $NomeDesconto = $_POST['NomeDesconto']; 
    $ValorDesconto = $_POST['ValorDesconto'];

    // Envia os dados para o banco
    $sql = "INSERT INTO Descontos (NomeDesconto, ValorDesconto) VALUES 
    ('{$NomeDesconto}', '{$ValorDesconto}')";

    // Verifica o insert
    if (mysqli_query($conn, $sql)) {
        echo "Sucesso";
    } else {
        echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }
?>