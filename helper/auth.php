<?php
    session_start();
    if(!isset($_SESSION["username"])) {
        echo "<script>alert('Pages Protected please Login!');window.location='/admin/login.php';</script>";
        exit();
    }
?>