<?php
    require_once "../helper/conn.php";

    $query = "SELECT username, email, wa, role FROM admin WHERE id = 1";
    $result = $conn->query($query);
    while ($row = mysqli_fetch_object($result)) {
        $data[] = $row;
    }
    if ($data) {
        $response = array(
            'status' => 200,
            'message' => 'success get admin data',
            'data' => $data
        );
    } else {
        $response = array(
            'status' => 404,
            'message' => 'No Data Found'
        );
    }
    header('Content-Type: application/json');
    echo json_encode($response);
?>