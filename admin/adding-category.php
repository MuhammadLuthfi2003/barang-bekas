<?php
  require_once "../helper/conn.php";
  require_once "../helper/auth.php"; 

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
      die($_SERVER['REQUEST_METHOD'] . ' method access not permitted');
  } 

  // membuat variabel untuk menampung data dari form
  $category_name      = mysqli_real_escape_string($conn, $_POST['name']);
  $category_image     = mysqli_real_escape_string($conn, $_FILES['image']['name']);


  //cek dulu jika ada gambar buku jalankan coding ini

  $file_extension = array('png','jpg', 'jpeg', 'webp'); //ekstensi file gambar yang bisa diupload 
  $x = explode('.', $category_image); //memisahkan nama file dengan ekstensi yang diupload
  $extension = strtolower(end($x));
  $file_tmp = $_FILES['image']['tmp_name'];   
  $random_number  = time();
  $new_image_name = $random_number.'-'.$category_image; //menggabungkan angka acak dengan nama file sebenarnya
        if(in_array($extension, $file_extension) === true)  {     
                move_uploaded_file($file_tmp, '../assets/img/'.$new_image_name); //memindah file gambar ke folder gambar
                  // jalankan query INSERT untuk menambah data ke database pastikan sesuai urutan (id tidak perlu karena dibikin otomatis)
                  $query = "INSERT INTO category (name, image) VALUES ('$category_name', '$new_image_name')";
                  $result = mysqli_query($conn, $query);
                  // periska query apakah ada error
                  if(!$result){
                      die ("Query gagal dijalankan: ".mysqli_errno($conn).
                            " - ".mysqli_error($conn));
                  } else {
                    //tampil alert dan akan redirect ke halaman index.php
                    //silahkan ganti index.php sesuai halaman yang akan dituju
                    echo "<script>alert('Kategori \"{$category_name}\" berhasil ditambah.');window.location='/admin/category.php';</script>";
                  }

            } else {     
              //jika file ekstensi tidak jpg dan png maka alert ini yang tampil
                echo "<script>alert('Ekstensi gambar yang boleh hanya jpg atau png.');window.location='/admin/add-category.php';</script>";
            }
