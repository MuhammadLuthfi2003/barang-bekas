<?php
    require_once "../helper/conn.php";
    require_once "../helper/auth.php";

    // menampilkan data dari database yang mempunyai id=$id
    $query = "SELECT * FROM admin WHERE id=1";
    $result = mysqli_query($conn, $query);
    // jika data gagal diambil maka akan tampil error berikut
    if(!$result){
      die ("Query Error: ".mysqli_errno($conn).
         " - ".mysqli_error($conn));
    }
    // mengambil data dari database
    $data = mysqli_fetch_assoc($result);
      // apabila data tidak ada pada database maka akan dijalankan perintah ini
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile <?php echo $data['username']; ?></title>
    <link rel="stylesheet" href="../assets/css/dist.css">
  </head>
  <body>
    <section class="w-full md:w-4/5 bg-slate-300 m-auto p-4 md:p-8 lg:md-12">
      <script>
          document.write('<a href="' + document.referrer + '" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Go Back</a>');
      </script>
      <h1 class="text-center font-bold text-3xl py-10">Edit Profile <?php echo $data['username']; ?></h1>
      <form method="POST" action="editing-profile.php" enctype="multipart/form-data" >
        <input name="id" value="<?php echo $data['id']; ?>"  hidden />
        <div>
          <label>Username</label>
          <input type="text" name="username" value="<?php echo $data['username']; ?>" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" autofocus="" required="" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value="<?php echo $data['email']; ?>" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required="" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" value="<?php echo $data['password']; ?>" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required="" />
        </div>
        <div>
          <label>WhatsApp Number</label>
          <input type="number" name="wa" value="<?php echo $data['wa']; ?>" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required="" />
        </div>
        <div>
         <button type="submit" class="mt-12 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit Profile</button>
        </div>
      </form>
    </section>
  </body> 
</html>
