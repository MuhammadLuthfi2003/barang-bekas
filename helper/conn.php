<?php

$host = "localhost";
$username = "root";
$password = "";
$db_name = "barbek";

$conn = mysqli_connect($host, $username, $password, $db_name);

if (!$conn) {
    die("db connnection failed");
}