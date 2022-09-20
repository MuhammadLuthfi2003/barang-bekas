<?php

require_once "./product-model.php";

$product = new Product();


if (!empty($_GET["id"])) {
    $product->get_detail($_GET["id"]);
} elseif (!empty($_GET["category"])) {
    $product->get_by_category($_GET["category"]);
} elseif (!empty($_GET["seller"])) {
    $product->get_by_seller($_GET["seller"]);
}elseif (!empty($_GET["search"])) {
    $product->search_product($_GET["search"]);
} else {
    $product->get_all();
}