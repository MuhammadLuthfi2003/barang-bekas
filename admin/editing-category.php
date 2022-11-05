<?php
    require_once "../helper/conn.php";
    require_once "../helper/auth.php";

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        die($_SERVER['REQUEST_METHOD'] . ' method access not permitted'); //http method validation
    }
    
    // creating variables to store data from the form
    $category_name      = mysqli_real_escape_string($conn, $_POST['name']);
    $category_image     = mysqli_real_escape_string($conn, $_FILES['image']['name']);

    //check if there is a book image, then run this code
    if ($category_image) {
        $file_extension = array('png','jpg', 'jpeg', 'webp'); //file extension that can be uploaded
        $x = explode('.', $category_image); //separating the file name and the extension uploaded
        $extension = strtolower(end($x));
        $file_tmp = $_FILES['image']['tmp_name'];
        $random_number  = time();
        $new_image_name = $random_number.'-'.$category_image; //combining the random number with the actual file name
        if(in_array($extension, $file_extension) === true)  {
            move_uploaded_file($file_tmp, '../assets/img/'.$new_image_name); //moving the image file to the image folder
            $res=mysqli_query($conn,"SELECT * from category WHERE id = {$_POST['id']} limit 1");
            if($row=mysqli_fetch_assoc($res)) 
            {
                $deleteimage=$row['image']; 
            }
            unlink("../assets/img/".$deleteimage);
            // run query INSERT to add data to the database make sure the order is correct (id is not needed because it is created automatically)
            $query = "UPDATE category SET name='$category_name', image='$new_image_name' WHERE id = {$_POST['id']}";
            $result = mysqli_query($conn, $query);
            // check the query, is there an error?
            if(!$result){
                die ("Query failed: ".mysqli_errno($conn).
                    " - ".mysqli_error($conn));
            } else {
                //display alert and will redirect to the index.php page
                //please change index.php to the desired page
                echo "<script>alert('Category \"{$category_name}\" successfully edited.');window.location='/admin/category.php';</script>";
            }
        } else {
            //if the file extension is not jpg and png then this alert will appear
            echo "<script>alert('Image extension that is allowed is only jpg or png.');window.location='/admin/add-category.php';</script>";
        }
    } else {
        // run query INSERT to add data to the database make sure the order is correct (id is not needed because it is created automatically)
        $query = "UPDATE category SET name = '$category_name' WHERE id = {$_POST['id']}";
        $result = mysqli_query($conn, $query);
        // check the query, is there an error?
        if(!$result){
            die ("Query failed: ".mysqli_errno($conn).
                " - ".mysqli_error($conn));
        } else {
            //display alert and will redirect to the index.php page
            //please change index.php to the desired page
            echo "<script>alert('Category \"{$category_name}\" successfully edited');window.location='/admin/category.php';</script>";
        }
    }