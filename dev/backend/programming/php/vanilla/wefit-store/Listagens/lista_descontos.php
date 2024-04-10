<?php
    // Realiza a conexão
    $conn = mysqli_connect("localhost", "root", "", "WeFit");
    
    $sql = "SELECT * FROM Descontos";
    $result = $conn->query($sql);

    echo "<h1>Descontos cadastrados</h1>";

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo 
            "id: " .$row["idDesconto"].
            " Desconto: " .$row["NomeDesconto"].
            " Valor do desconto: " .$row["ValorDesconto"]."<br><br>";
        }
    } else {
        echo "0 results";
    }
        `</main>
    </body>`;
?>