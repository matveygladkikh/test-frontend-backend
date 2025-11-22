<?php

// 3.1(Без капитализации)
function incomeOnDeposit($sumDefault, $period, $percentage)
{

    $resultSum = $sumDefault * (1 + (($percentage/100) * $period)/12);

    $income = $resultSum - $sumDefault;

    return $income;
}

// 3.2 (Можно через объект DateTime но этот способ быстрее)
function formDate($day,$month)
{
    $months = [
        1 => 'января',
        2 => 'февраля',
        3 => 'марта',
        4 => 'апреля',
        5 => 'мая',
        6 => 'июня',
        7 => 'июля',
        8 => 'августа',
        9 => 'сентября',
        10 => 'октября',
        11 => 'ноября',
        12 => 'декабря',
    ];

    return $day . ' ' . $months[$month];
}
?>

<?php
//3.3

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $num1 = (float) $_POST['num1'];
    $num2 = (float) $_POST['num2'];
    $operation = $_POST['operation'];

    switch ($operation){
        case 'add':
            $result = $num1 + $num2;
            break;
        case 'sub':
            $result = $num1 - $num2;
            break;
        case 'mul':
            $result = $num1 * $num2;
            break;
        case 'div':
            $result = $num1 / $num2;
            break;
    }

}
?>
<!--3.3-->
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
    <title>Calculator</title>
</head>
<body>
<form method="post" action="3.1-3.3.php">
    <input type="number" name="num1" step="any" placeholder="Первое число">
    <select name="operation">
        <option value="add">+</option>
        <option value="sub">-</option>
        <option value="mul">*</option>
        <option value="div">/</option>
    </select>
    <input type="number" name="num2" step="any" placeholder="Второе число">

    <button type="submit">Посчитать</button>
</form>

    <p>Результат: <?= $result  ?></p>



</body>
</html>
