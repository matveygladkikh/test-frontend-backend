<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    >
    <meta
        http-equiv="X-UA-Compatible"
        content="ie=edge"
    >
    <title>Gallery</title>
    <link
        rel="stylesheet"
        href="./styles.css"
    >
</head>
<body>
<main class="container">
    <div class="images">
        <p>Добавить свое изображение</p>
        <form action="upload.php"
              class="fromUpload"
              method="post"
              enctype="multipart/form-data">
            <input
            id="imageLoad"
            name="imageLoad"
            type="file"
            />
            <button
            type="submit"
                >Загрузить изображение</button>
        </form>
        <div class="imagesOnPage">
          <?php
          //Достаем массив изображений из директории
          $files = scandir('images');
          //Итерируемся по ним в цикле
          foreach ($files as $file){
            //Исключаем системные файлы
            if($file === '.' || $file === '..') continue;
            $ext = pathinfo($file, PATHINFO_EXTENSION);
            //Отсеиваем по расширению и выводим их в теге
            if(in_array(strtolower($ext), ['jpg', 'jpeg', 'png'])){
                echo "<img src='images/$file' alt='$file' loading='lazy' width='300' height='300'>";
            }
          }
          ?>
        </div>

    </div>
</main>

</body>
</html>
