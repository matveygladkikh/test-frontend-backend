<?php

function angleBetweenArrows($hours, $minutes)
{
    $circle = 360;
    $hourInCircle = 12;
    $minuteInHour = 60;
    $hours = $hours % 12;
    echo  $hours;

    $hourArrowPerHour = $circle / $hourInCircle;
    $hourArrowPerMinute = $hourArrowPerHour / $minuteInHour;
    $minuteArrowPerMinute = $circle / $minuteInHour;;

    $hourArrowAngle = $hours * $hourArrowPerHour + $minutes * $hourArrowPerMinute;
    $minuteArrowAngle = $minutes * $minuteArrowPerMinute;

    $resultAngle = abs($hourArrowAngle - $minuteArrowAngle);

    return min($resultAngle, 360 - $resultAngle);

}
