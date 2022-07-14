<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        function callSpotifyApi($options) 
        {
            $curl  = curl_init();
            curl_setopt_array($curl, $options); 
            $json  = curl_exec($curl);
            $error = curl_error($curl);
            curl_close($curl);
            if ($error) {
                return ['error'   => TRUE,
                        'message' => $error];
            }
            $data  = json_decode($json);
            if (is_null($data)) {
                return ['error'   => TRUE,
                        'message' => json_last_error_msg()];
            }
            return $data; 
        }
        $headers  = ['Content-Type: application/json',
        'Authorization: Bearer BQCs3gvWmNqKvWcbbdCKqwVWC3RHk3vJ06pvleaQWjvZ9wocFg9b8d32B9B6CI3UcvYmHOxbLziS2nofiX1oanN20S4N-Xpobq6cY86bUdwTOMeu0nhCVVPcHS-P7GkRkSM-MhgtGqLRT7ZL5XLjDSGBkWsRzspyQp6EWjn1GLHOD7aKVU-dQwNg28aexw5uEoLkmLvp'];
        $url      = 'https://api.spotify.com/v1/me/player/currently-playing';
        $options  = [CURLOPT_URL            => $url,
                    CURLOPT_RETURNTRANSFER => TRUE,
                    CURLOPT_FOLLOWLOCATION => TRUE,
                    CURLOPT_ENCODING       => '',
                    CURLOPT_MAXREDIRS      => 10,
                    CURLOPT_TIMEOUT        => 30,
                    CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST  => 'GET',
                    CURLOPT_HTTPHEADER     => $headers];
                    $features = callSpotifyApi($options); 
                    // var_dump($features);

                    // echo '<br>';

                    echo json_encode($features)
    ?>
</body>
</html>