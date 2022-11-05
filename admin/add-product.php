<?php
  require_once "../helper/conn.php";
  require_once "../helper/auth.php"; //agar index terhubung dengan database, maka koneksi sebagai penghubung harus di include
//   include 'auth.php'; //user access privileges
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Produk</title>
    <link rel="stylesheet" href="../assets/css/dist.css">
  </head>
  <body>
    <section class="w-full md:w-4/5 bg-slate-300 m-auto p-4 md:p-8 lg:md-12">
      <script>
          document.write('<a href="' + document.referrer + '" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Go Back</a>');
      </script>
      <h1 class="text-center font-bold text-3xl py-10">Tambahkan Produk</h1>
      <form method="POST" action="adding-product.php" enctype="multipart/form-data" >
      
        <div>
          <label>Nama Produk</label>
          <input type="text" name="name" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" autofocus="" required="" />
        </div>
        <div>
          <label>Deskripsi Produk</label>
         <textarea name="description" rows="6" class="w-full px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required=""></textarea>
        </div>
        <div>
          <label>Berat Produk</label>
         <input type="number" name="weight" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required="" />
        </div>
        <div>
          <label>Stok Produk</label>
         <input type="number" name="stock" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required="" />
        </div>
        <div>
          <label>Harga Produk</label>
         <input type="number" name="price" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required="" />
        </div>
        <div>
          <label>Kategori Produk</label>
            <select type="number" name="category" class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" required="">
                <?php
                    $query = "SELECT * FROM category";
                    $result = mysqli_query($conn, $query);
                    while($row = mysqli_fetch_assoc($result)) {
                        echo "<option value='".$row['id']."'>".$row['name']."</option>";
                    }
                ?>
            </select>
        </div>
        <div>
          <label>Gambar Produck</label>
         <input type="file" name="image" oninput="pic.src=window.URL.createObjectURL(this.files[0])" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" required="" />
         <img id="pic" class="w-64 mt-6"/>
        </div>
        <div>
         <button type="submit" class="mt-12 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Tambah Produk</button>
        </div>
      </form>
    </section>
  </body>
</html>