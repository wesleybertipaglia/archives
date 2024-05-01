<?php
    $nome = $_POST['nome'];
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // connection
    require_once("conexao.php");

    try {
        $sql = "insert into pessoas (nome, usuario, senha, email, tipo)
        values ('$nome', '$usuario', '$senha', '$email', 2)";
        $query=$conexao->prepare($sql);
        $query->execute();
        $rs = $conexao->lastInsertId();
        echo ("Conta cadastrada com sucesso");
    }
    catch(PDOException $i) {
        die("Erro: <code>".$i->getMessage()."</code>");
    }
?>