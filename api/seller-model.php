<?php

require_once "../helper/conn.php";

class Seller{
    public function get_all():void
    {
        global $conn;
        $query = "SELECT * from seller";
        $data = array();
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result)) 
        {
            $data[]=$row;
        }
        $response=array(
            'status' => 200,
            'message' => 'get all seller success',
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function get_detail($id):void
    {
        global $conn;
        $query = "SELECT * FROM seller WHERE id=$id";
        $result = $conn->query($query);
        while ($row = mysqli_fetch_object($result))
        {
            $data[] = $row;
        }
        if ($data) {
            $response = array(
                'status' => 200,
                'message' => 'success get seller by id',
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