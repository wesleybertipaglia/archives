<?php
    require_once "conexao.php";
    
    // Recebe os dados e atrubui as variáveis
    $NomeProduto = $_POST['NomeProduto']; 
    $DescricaoProduto = $_POST['DescricaoProduto']; 
    $ValorProduto = $_POST['ValorProduto']; 
    $DisponibilidadeProduto = $_POST['DisponibilidadeProduto']; 

    // Envia os dados para o banco
    $sql = "INSERT INTO Produtos (NomeProduto, DescricaoProduto, DisponibilidadeProduto, ValorProduto) VALUES 
    ('{$NomeProduto}', '{$DescricaoProduto}', '{$DisponibilidadeProduto}', '{$ValorProduto}')";
    if (mysqli_query($conn, $sql)) {
        echo "Sucesso";
    } else {
        echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }
?>