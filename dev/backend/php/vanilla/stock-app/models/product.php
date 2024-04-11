<?php
include('../database/connection.php');

class Product
{
    private $id;
    private $name;
    private $quantity;

    public function __construct($name, $quantity)
    {
        $this->name = $name;
        $this->quantity = $quantity;
    }

    public static function getAll()
    {
        global $conn;
        $result = $conn->query("SELECT * FROM products");
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($id)
    {
        global $conn;
        $result = $conn->query("SELECT * FROM products WHERE id = $id");
        return $result->fetch_assoc();
    }

    public function save()
    {
        global $conn;
        if ($this->id) {
            $conn->query("UPDATE products SET name='$this->name', quantity=$this->quantity WHERE id=$this->id");
        } else {
            $conn->query("INSERT INTO products (name, quantity) VALUES ('$this->name', $this->quantity)");
        }
    }

    public function delete()
    {
        global $conn;
        $conn->query("DELETE FROM products WHERE id=$this->id");
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getQuantity()
    {
        return $this->quantity;
    }

    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
    }
}
