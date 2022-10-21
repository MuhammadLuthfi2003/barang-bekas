<?php
require_once "./seller-model.php";

$seller = new Seller();

if (!empty($_GET["id"])) {
    $seller->get_detail($_GET["id"]);
} else {    
    $seller->get_all();
}