<?php
    // Realiza a conexão
    $conn = mysqli_connect("localhost", "root", "", "WeFit");
    
    $sql = "SELECT * FROM Produtos";
    $result = $conn->query($sql);

    echo "<h1>Produtos cadastrados</h1>";

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo 
            "id: " .$row["IdProduto"].
            " Produto: " .$row["NomeProduto"].
            " Descrição: " .$row["DescricaoProduto"].
            " Disponibilidade: " .$row["DisponibilidadeProduto"].
            " Valor: " .$row["ValorProduto"]."<br><br>";
        }
    } else {
        echo "0 results";
    }
?>