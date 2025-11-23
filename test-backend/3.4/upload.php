<?php
// Папка для сохранения загруженных файлов
$uploadDir = __DIR__ . "/images/";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['imageLoad'])) {

    $tmpName = $_FILES['imageLoad']['tmp_name'];
    $originalName = basename($_FILES['imageLoad']['name']);

    // Делаем имя файла уникальным чтобы новые изображение не перезаписывали старые
    $timestamp = date('Y-m-d_H-i-s');
    $targetFile = $uploadDir . $timestamp . "_" . $originalName;

    // Перемещаем файл /images
    if (move_uploaded_file($tmpName, $targetFile)) {
        header("Location: index.php"); /*Редирект после загрузки
    чтобы сразу видеть новое изображение*/
        exit;
    } else {
        die("Ошибка при сохранении файла");
    }

} else {
    die("Файл не был загружен.");
}
