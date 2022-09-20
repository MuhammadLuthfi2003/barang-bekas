<?php

require_once "./category-model.php";

$category = new Category();

if (!empty($_GET["id"])) {
    $category->get_detail($_GET["id"]);
} else {
    $category->get_all();
}