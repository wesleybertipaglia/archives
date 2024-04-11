<?php
    if(isset($_GET['id'])) {
        session_start();
        $_SESSION['cart'] =  $_SESSION['cart'].$_GET['id'].",";
        header("location:cart.php");
    } else {
        header("location:index.php");
    }
?>