<?php
    // Realiza a conexão
    $conn = mysqli_connect("localhost", "root", "", "WeFit");
    
    $sql = "SELECT * FROM Fornecedores";
    $result = $conn->query($sql);

    echo "<h1>Fornecedores cadastrados</h1>";

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo 
            "id: " .$row["IdFornecedor"].
            " Name: " .$row["NomeFornecedor"].
            " CNPJ: " .$row["CnpjFornecedor"].
            " Telefone: " .$row["TeleforneFornecedor"].
            " Email: " .$row["EmailFornecedor"]."<br><br>";
        }
    } else {
        echo "0 results";
    }
?>