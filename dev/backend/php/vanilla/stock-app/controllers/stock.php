<?php
include('../models/product.php');

class StockController
{
    public function getStock()
    {
        $products = Product::getAll();
        echo json_encode($products);
    }

    public function addProduct($name, $quantity)
    {
        $product = new Product($name, $quantity);
        $product->save();
    }

    public function updateProduct($id, $name, $quantity)
    {
        $product = Product::getById($id);
        $product->setName($name);
        $product->setQuantity($quantity);
        $product->save();
    }

    public function deleteProduct($id)
    {
        $product = Product::getById($id);
        $product->delete();
    }
}
