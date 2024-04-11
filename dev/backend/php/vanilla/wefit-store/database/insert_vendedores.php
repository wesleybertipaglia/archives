<?php
    require_once "conexao.php";
    
    // Recebe os dados e atrubui as variáveis
    $NomeVendedor = $_POST['NomeVendedor']; 
    $CpfVendedor = $_POST['CpfVendedor']; 
    $SalarioVendedor = $_POST['SalarioVendedor']; 

    // Envia os dados para o banco
    $sql = "INSERT INTO Vendedores (NomeVendedor, CpfVendedor, SalarioVendedor) VALUES 
    ('{$NomeVendedor}', '{$CpfVendedor}', '{$SalarioVendedor}')";

    // Verifica o insert
    if (mysqli_query($conn, $sql)) {
        echo "Sucesso";
    } else {
        echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }
?>