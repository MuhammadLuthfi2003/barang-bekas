<?php

require_once "../helper/conn.php";

class Product
{
    public function get_all():void
    {
        global $conn;
        global $image_base_url;
        $query = "SELECT * from product";
        $data = array();
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result)) 
        {
            if($row->image){
                $row->image = $image_base_url . $row->image;
            }
            $data[]=$row;
        }
        $response=array(
            'status' => 200,
            'message' => 'get all product success',
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function get_detail($id):void
    {
        global $conn;
        global $image_base_url;
        $query = "SELECT * FROM product WHERE id=$id";
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result))
        {
            if($row->image){
                $row->image = $image_base_url . $row->image;
            }
            $data[] = $row;
        }
        if ($data) {
            $response = array(
                'status' => 200,
                'message' => 'success get product by id',
                'data' => $data
            );
        }else{
            $response = array(
                'status' => 404,
                'message' =>'No Data Found'
            );
        }
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function get_by_category($category_id):void
    {
        global $conn;
        global $image_base_url;
        $category_name = "SELECT name FROM category WHERE id=$category_id";
        $category_name = $conn->query($category_name);
        $category_name = mysqli_fetch_object($category_name);
        $category_name = $category_name->name;
        $query = "SELECT * FROM product WHERE category_id=$category_id"; 
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result)) 
        {
            if($row->image){
                $row->image = $image_base_url . $row->image;
            }
            $data[]=$row;
        }
        $response=array(
            'status' => 200,
            'message' => 'get product by category success',
            'category' => $category_name,
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function sort_price($price='none'):void
    {
        global $conn;
        global $image_base_url;
        switch ($price) {
            case 'termurah':
                $query = "SELECT * FROM product ORDER BY price ASC";
                break;
            case 'termahal':
                $query = "SELECT * FROM product ORDER BY price DESC";
                break;
            default:
                $query = "SELECT * FROM product";
                break;
        }
        $data = array();
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result)) 
        {
            if($row->image){
                $row->image = $image_base_url . $row->image;
            }
            $data[]=$row;
        }
        $response=array(
            'status' => 200,
            'message' => 'sort product',
            'mode' => $price,
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }
    public function search_product($keyword):void
    {
        global $conn;
        global $image_base_url;
        $query = "SELECT * FROM product WHERE name LIKE '%$keyword%'";
        $data = array();
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result)) 
        {
            if($row->image){
                $row->image = $image_base_url . $row->image;
            }
            $data[]=$row;
        }
        $response=array(
            'status' => 200,
            'message' => 'search product success',
            'query' => $keyword,
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function get_by_seller($seller_id):void
    {
        global $conn;
        global $image_base_url;
        $seller_name = "SELECT name FROM seller WHERE id=$seller_id";
        $query = "SELECT * FROM product WHERE seller_id=$seller_id"; 
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result)) 
        {
            if($row->image){
                $row->image = $image_base_url . $row->image;
            }
            $data[]=$row;
        }
        $response=array(
            'status' => 200,
            'message' => 'get product by seller success',
            'seller' => $seller_name,
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}