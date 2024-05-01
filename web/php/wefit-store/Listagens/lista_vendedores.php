<?php
    // Realiza a conexão
    $conn = mysqli_connect("localhost", "root", "", "WeFit");
    
    $sql = "SELECT * FROM Vendedores";
    $result = $conn->query($sql);

    echo "<h1>Vendedores cadastrados</h1>";

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo 
            "id: " .$row["IdVendedor"].
            " Name: " .$row["NomeVendedor"].
            " CPF: " .$row["CpfVendedor"].
            " Salario: " .$row["SalarioVendedor"]."<br><br>";
        }
    } else {
        echo "0 results";
    }
?>