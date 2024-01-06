<?php
    require_once "conexao.php";
    
    // Recebe os dados e atrubui as variáveis
    $NomeFornecedor = $_POST['NomeFornecedor']; 
    $CnpjFornecedor = $_POST['CnpjFornecedor']; 
    $TeleforneFornecedor = $_POST['TeleforneFornecedor']; 
    $EmailFornecedor = $_POST['EmailFornecedor']; 

    // Envia os dados para o banco
    $sql = "INSERT INTO Fornecedores (NomeFornecedor, CnpjFornecedor, TeleforneFornecedor, EmailFornecedor) VALUES 
    ('{$NomeFornecedor}', '{$CnpjFornecedor}', '{$TeleforneFornecedor}', '{$EmailFornecedor}')";

    // Verifica o insert
    if (mysqli_query($conn, $sql)) {
        echo "Sucesso";
    } else {
        echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }
?>