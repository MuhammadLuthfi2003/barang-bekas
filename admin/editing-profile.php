<?php
    require_once "../helper/conn.php";
    require_once "../helper/auth.php";

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        die($_SERVER['REQUEST_METHOD'] . ' method access not permitted'); //http method validation
    }

    // creating variables to store data from the form
    $admin_username = mysqli_real_escape_string($conn, $_POST['username']);
    $admin_password = mysqli_real_escape_string($conn, $_POST['password']);
    $admin_email = mysqli_real_escape_string($conn, $_POST['email']);
    $admin_wa = mysqli_real_escape_string($conn, $_POST['wa']);

    // run query INSERT to add data to the database make sure the order is correct (id is not needed because it is created automatically)
    $query = "UPDATE admin SET username = '$admin_username', password = '$admin_password', email = '$admin_email', wa = '$admin_wa' WHERE id = {$_POST['id']}";
    $result = mysqli_query($conn, $query);
    // check the query, is there an error?
    if(!$result){
        die ("Query failed: ".mysqli_errno($conn).
            " - ".mysqli_error($conn));
    } else {
        //display alert and will redirect to the index.php page
        //please change index.php to the desired page
        $_SESSION['username'] = $admin_username;
        echo "<script>alert('Profile successfully edited');window.location='/admin/';</script>";
    }