<?php

require_once "../helper/conn.php";

class Category{

    public function get_all():void
    {
        global $conn;
        global $image_base_url;
        $query = "SELECT * from category";
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
            'message' => 'get all category success',
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function get_detail($id):void
    {
        global $conn;
        global $image_base_url;
        $query = "SELECT * FROM category WHERE id=$id";
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
                'message' => 'success get category by id',
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
}