<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Store Stock Management</title>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js"
        integrity="sha384-u7E2ZM3LwK2TQ/EMc3VEm5QTs4QT2M9H5+X2jqBkg4JbY9eJQCDsACNT/NFqLv2"
        crossorigin="anonymous"></script>    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.0/js/bootstrap.min.js"
        integrity="sha384-rqM+Y9waRDbzvCEsY39R+vDlGO9tGOvawAJc/fF8eFImbsjZ6cz9Hu1SoO3Ipu8S"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-5NqWSi63iJ+pEXM0WnPKfrPR9M/2zMR7Lg8fPLt1OAGi4vLHsW1kWSF7r35QI6tw"
        crossorigin="anonymous"></script>    
</head>

<body>
    <div class="container mt-5">
        <h2 class="mb-4">Store Stock</h2>

        <form id="addProductForm" class="mb-4">
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="productName">Product Name</label>
                    <input type="text" class="form-control" id="productName" placeholder="Product Name" required>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="quantity">Quantity</label>
                    <input type="number" class="form-control" id="quantity" placeholder="Quantity" required>
                </div>
                <div class="col-md-4 mb-3">
                    <button type="submit" class="btn btn-primary">Add Product</button>
                </div>
            </div>
        </form>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="productList">
                <?php
                include('./database/connection.php');

                $result = $conn->query("SELECT * FROM products");

                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>{$row['id']}</td>";
                    echo "<td>{$row['name']}</td>";
                    echo "<td>{$row['quantity']}</td>";
                    echo "<td><button class='btn btn-danger btn-sm'>Delete</button></td>";
                    echo "</tr>";
                }

                $conn->close();
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>