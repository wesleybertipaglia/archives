<?php
    // Realiza a conexão
    $conn = mysqli_connect("localhost", "root", "", "WeFit");
    
    $sql = "SELECT * FROM Clientes";
    $result = $conn->query($sql);

    echo "<h1>Clientes cadastrados</h1>";

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo 
            "id: " .$row["IdCliente"].
            " Name: " .$row["NomeCliente"].
            " CPF: " .$row["CpfCliente"].
            " Telefone: " .$row["TelefoneCliente"].
            " Email: " .$row["EmailCliente"]."<br><br>";
        }
    } else {
        echo "0 results";
    }
?>