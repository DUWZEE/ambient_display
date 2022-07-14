<?php 
    header('Content-Type: application/json');
    date_default_timezone_set("Europe/Bratislava");
    $data = array(
        'year' => date("Y"),
        'month' => date("m"),
        'day' => date("d"),
        'day_name' => date("l"),
        'hours' => date("H"),
        'minutes' => date("i"),
        'seconds' => date("s")
    );

    echo json_encode($data)."\n";
?>