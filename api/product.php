<?php

require_once "../helper/conn.php";

if (function_exists($_GET['function'])) {
    $_GET['function']();
}

function get_products(){

}