<?php
    require_once "conexao.php";
    
    // Recebe os dados e atrubui as variáveis
    $NomeCliente = $_POST['NomeCliente']; 
    $CpfCliente = $_POST['CpfCliente']; 
    $TelefoneCliente = $_POST['TelefoneCliente']; 
    $EmailCliente = $_POST['EmailCliente']; 

    // Envia os dados para o banco
    $sql = "INSERT INTO Clientes (NomeCliente, CpfCliente, TelefoneCliente, EmailCliente) VALUES 
    ('{$NomeCliente}', '{$CpfCliente}', '{$TelefoneCliente}', '{$EmailCliente}')";

    // Verifica o insert
    if (mysqli_query($conn, $sql)) {
        echo "Sucesso";
    } else {
        echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }
?>