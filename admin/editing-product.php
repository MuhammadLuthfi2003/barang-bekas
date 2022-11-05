<?php
  require_once "../helper/conn.php";
  require_once "../helper/auth.php";

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
      die($_SERVER['REQUEST_METHOD'] . ' method access not permitted');
  } 

  // membuat variabel untuk menampung data dari form
  $product_name        = mysqli_real_escape_string($conn, $_POST['name']);
  $product_description = mysqli_real_escape_string($conn, $_POST['description']);
  $product_stock       = mysqli_real_escape_string($conn, $_POST['stock']);
  $product_price       = mysqli_real_escape_string($conn, $_POST['price']);
  $product_weight      = mysqli_real_escape_string($conn, $_POST['weight']);
  $product_category    = mysqli_real_escape_string($conn, $_POST['category']);
  $product_image       = mysqli_real_escape_string($conn, $_FILES['image']['name']);


  //cek dulu jika ada gambar buku jalankan coding ini
  if ($product_image) {
    $file_extension = array('png','jpg', 'jpeg', 'webp'); //ekstensi file gambar yang bisa diupload 
    $x = explode('.', $product_image); //memisahkan nama file dengan ekstensi yang diupload
    $extension = strtolower(end($x));
    $file_tmp = $_FILES['image']['tmp_name'];   
    $random_number  = time();
    $new_image_name = $random_number.'-'.$product_image; //menggabungkan angka acak dengan nama file sebenarnya
            if(in_array($extension, $file_extension) === true)  {     
                    move_uploaded_file($file_tmp, '../assets/img/'.$new_image_name); //memindah file gambar ke folder gambar
                    // jalankan query INSERT untuk menambah data ke database pastikan sesuai urutan (id tidak perlu karena dibikin otomatis)
                    $query = "UPDATE product SET name = '$product_name', description = '$product_description', image = '$new_image_name', price = '$product_price', stock = '$product_stock', weight = '$product_weight', category_id = '$product_category' WHERE id = {$_POST['id']}";
                    $result = mysqli_query($conn, $query);
                    // periska query apakah ada error
                    if(!$result){
                        die ("Query gagal dijalankan: ".mysqli_errno($conn).
                                " - ".mysqli_error($conn));
                    } else {
                        //tampil alert dan akan redirect ke halaman index.php
                        //silahkan ganti index.php sesuai halaman yang akan dituju
                        echo "<script>alert('Produk \"{$product_name}\" berhasil diedit.');window.location='/admin/index.php';</script>";
                    }

                } else {     
                //jika file ekstensi tidak jpg dan png maka alert ini yang tampil
                    echo "<script>alert('Ekstensi gambar yang boleh hanya jpg atau png.');window.location='/admin/add-product.php';</script>";
                }
  }else{
    // run query INSERT to add data to the database make sure the order is correct (id is not needed because it is created automatically)
    $query = "UPDATE product SET name = '$product_name', description = '$product_description', price = '$product_price', stock = '$product_stock', weight = '$product_weight', category_id = '$product_category' WHERE id = '$_POST[id]'";
    $result = mysqli_query($conn, $query);
    // check the query, is there an error?
    if(!$result){
        die ("Query failed: ".mysqli_errno($conn).
            " - ".mysqli_error($conn));
    } else {
        //display alert and will redirect to the index.php page
        //please change index.php to the desired page
        echo "<script>alert('Produk \"{$product_name}\" successfully edited');window.location='/admin/index.php';</script>";
    }
  }

  
